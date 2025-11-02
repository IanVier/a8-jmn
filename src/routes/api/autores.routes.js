import { Router } from 'express';
import { Autor } from '../../models/autores.model.js'; // Importa el modelo

const router = Router(); 

router.get('/', async (req, res) => { 
    try {
        const autores = await Autor.getAll(); 
        res.json(autores); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener autores: ' + error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const [result] = await Autor.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({error: error.message})
    }
});

export default router; 