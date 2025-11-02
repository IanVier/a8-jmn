// src/models/autores.model.js (CORREGIDO)

import pool from '../../dbConfig.js'; // Inyecta la conexión (el pool)

const getAll = async () => { // <--- Función asíncrona
    // pool.query devuelve una Promesa, usamos await y desestructuramos [rows]
    const [rows] = await pool.query('SELECT * FROM autores'); 
    return rows;
}

// Exportamos la función dentro de un objeto llamado Autor (convención de modelo)
export const Autor = { 
    getAll
}