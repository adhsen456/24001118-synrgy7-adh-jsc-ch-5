import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { CarModel } from '../models/cars.model';
import { uploadFile } from '../utils/cloudinary.utils';

dotenv.config();

export const getAllCars = async (req: Request, res: Response) => {
    try {
        const cars = await CarModel.query();
        if(!cars.length) return res.status(404).json({
            message: 'Cars data not found',
        });
        res.status(200).json({
            message: 'All cars data have been obtained',
            data: {
                cars,
            }
        });
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    }
}

export const getCarById = async (req: Request, res: Response) => {
    try {
        const carId: number = +req.params.id;
        const car = await CarModel.query()
                    .findById(carId)
        if(!car) return res.status(404).json({
            message: 'Car data not found',
        });
        res.status(200).json({
            message: 'Car data has been obtained',
            data: {
                car,
            },
        });
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error,
        });
    };
}

export const createCar = async (req: Request, res: Response) => {
    if(!req.file) return;
    const { name, price, availability, startRent, finishRent } = req.body;
    try {
        const file: Buffer = req.file.buffer;
        const fileURL = await uploadFile(file, String(process.env.CLOUDINARY_FOLDER_PATH));
        const newCar = await CarModel.query().insertGraph({
            name,
            price,
            file: fileURL,
            availability,
            startRent,
            finishRent,
            createdAt: new Date(),
            updatedAt: new Date(),
        } as any);
        res.status(201).json({
            message: 'Car data has been created',
            data: {
                car: newCar,
            },
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        });
    }
}

export const updateCar = async (req: Request, res: Response) => {
    const carId: number = +req.params.id;
    const { name, price, availability, startRent, finishRent, } = req.body;
    try {
        const updateCarParams: Partial<CarModel> = {
            name,
            price,
            availability,
            startRent,
            finishRent,
            updatedAt: new Date(),
        }
        if(req.file){
            const file: Buffer = req.file.buffer;
            const fileURL = await uploadFile(file, String(process.env.CLOUDINARY_FOLDER_PATH));
            updateCarParams.file = fileURL;
        }
        const updatedCar = await CarModel.query().patchAndFetchById(carId, updateCarParams);
        if(!updatedCar){
            return res.status(404).json({
                message: 'Car data is not found',
            })
        }
        res.status(200).json({
            message: 'Car data has been updated',
            data: {
                car: updatedCar,
            },
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        });
    }
}

export const deleteCar = async (req: Request, res: Response) => {
    const carId = +req.params.id;
    try {
        await CarModel.query().deleteById(carId)
        .throwIfNotFound();
        res.status(200).json({
            message: 'Car data has been deleted',
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            message: error,
        })
    }
}