// src/routes/api.routes.js (CORREGIDO)

import { Router } from 'express';
import apiAutoresRouter from './api/autores.routes.js'; // Importación ES Module

const router = Router();

router.use('/autores', apiAutoresRouter);

// router.use('/autores', apiPostsRouter) <--- ELIMINAR LÍNEA DUPLICADA
// const apiPostsRouter = require('./api/posts.routes'); <--- ELIMINAR O CONVERTIR

export default router; // Exportación ES Module