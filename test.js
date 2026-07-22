import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

try {
    await sequelize.authenticate();
    console.log('✅ CONEXIÓN EXITOSA A MYSQL');
} catch (error) {
    console.error('❌ ERROR:', error.message);
}