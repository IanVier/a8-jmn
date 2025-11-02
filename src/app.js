// src/app.js (CORREGIDO)

import express from "express"; // <--- CAMBIO
import pool from '../dbConfig.js'; // conexion bbdd (Añadir .js)
import apiRoutes from './routes/api.routes.js'; // <--- Añadir esta línea aquí

const app = express();
app.use(express.json());


// Route configuration
// const apiRoutes = require('./routes/api.routes'); <--- ¡ELIMINAR ESTA LÍNEA!

app.use('/api', apiRoutes);

// 404 handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "Not found"
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

export default app; // <--- CAMBIO