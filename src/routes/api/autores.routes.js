import { Router } from 'express';
import { Autores } from '../../controllers/autores.controller.js'; 

const router = Router(); 

router.get('/', Autores.getAll);
router.get('/:autorId', Autores.getById);

router.post('/', Autores.create);

export default router; 