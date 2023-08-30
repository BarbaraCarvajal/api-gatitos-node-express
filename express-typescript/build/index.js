"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middlawere que transforma la req.body a un json
const PORT = 3000;
//ponemos el _ para q no nos de error de q no se usa
app.get('/ping', (_req, res) => {
    console.log('ping');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});