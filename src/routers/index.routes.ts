import { Router } from 'express';
import { Request, Response } from 'express';
import carRoutes from './cars.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Masuk router',
    })
});

router.use('/cars', carRoutes);

export default router;