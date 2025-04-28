import { Sequelize } from 'sequelize';

export const database = new Sequelize('test-qr-connect', 'postgres', '1', {
    host: 'localhost',
    dialect: 'postgres'
});

export async function verifyConnectionDatabase() {
    try {
        await database.authenticate();
        console.log('Connection to the database has been established successfully.');

        await database.sync({ force: true }); // creates the tables by deleting the data
        console.log('🗃️☑️ Create tables!');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    };
};
