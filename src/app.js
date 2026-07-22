import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { testConnection, sequelize } from './config/database.js';

// (Más adelante importaremos los modelos y las asociaciones aquí)

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API lista para el examen' });
});

const startServer = async () => {
    await testConnection();
    
    // ⚠️ ESTA LÍNEA ES LA MAGIA: Crea/actualiza las tablas en MySQL
    await sequelize.sync({ alter: true }); 
    console.log('📦 Base de datos sincronizada (Tablas creadas/actualizadas)');
    
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
};

startServer();