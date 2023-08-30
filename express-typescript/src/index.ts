import express from 'express'; //ESModules
import catRouter from './routes/cats';

const app = express();
app.use(express.json()); //middlawere que transforma la req.body a un json

const PORT = 3000;
//ponemos el _ para q no nos de error de q no se usa
app.get('/ping', (_req, res) => {
    console.log('ping');
    res.send('pong');
})

app.use('/api/gatos', catRouter);

app.listen(PORT,() => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
})


