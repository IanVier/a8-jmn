import { Router } from 'express';
import { Posts } from '../../controllers/posts.controller.js'

const router = Router();

router.get('/', Posts.getAll);

export default router; 
