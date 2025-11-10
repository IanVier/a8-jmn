import { Router } from 'express';
import { Posts } from '../../controllers/posts.controller.js';

const router = Router();

router.get('/', Posts.getAll); // ojo aqui me dio un error xq volví a poner /posts
router.get('/:postId', Posts.getById);
router.get('/byAutor/:autorId', Posts.getAllByAutor);
router.post('/', Posts.newPost);

export default router;
