import { Router } from 'express';

import apiAutoresRouter from './api/autores.routes.js';
import apiPostsRouter from './api/posts.routes.js';

const router = Router();

router.use('/autores', apiAutoresRouter);
router.use('/posts', apiPostsRouter);


export default router; 