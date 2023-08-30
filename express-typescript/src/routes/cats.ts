import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('Meow'); 
})

router.post('/', (_req, res) => {
    res.send('Guardando un gato')
})

export default router;