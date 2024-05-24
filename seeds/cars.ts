import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('cars').del();

    // Inserts seed entries
    await knex('cars').insert([
        {
            name: 'Toyota Avanza Veloz 2020',
            price: 450_000_000,
            file: 'https://res.cloudinary.com/dqaixl4l8/image/upload/v1716498154/binar-synrgy/challenge-5/toyota-avanza-1-3-e_230907175548-793_w8pahx.jpg',
            startRent: '05/26/2024',
            finishRent: '05/31/2024',
            createdAt: new Date(),
            updatedAt: new Date(),
            availability: true,
        },
    ]);
};
