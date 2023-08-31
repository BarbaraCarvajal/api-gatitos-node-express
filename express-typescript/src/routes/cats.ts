import express from 'express';
import * as catServices from '../services/catServices';


const router = express.Router();

router.get('/', (_req, res) => {
    res.send(catServices.getGatitosSinInfoSensible()); 
})

router.post('/', (_req, res) => {
    res.send('Guardando un gato')
})

export default router;