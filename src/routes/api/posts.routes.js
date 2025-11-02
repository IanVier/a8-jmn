import { Router } from 'express';
import { Posts } from '../../models/posts.model.js'

const router = Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.getAll();
        res.json(posts);
    } catch (error) {
        console.log (error);
        res.status(500).json({ error: 'Error al obtener posts' + error.message })
    }
})

export default router; 
