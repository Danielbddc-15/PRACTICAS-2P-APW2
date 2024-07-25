"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { PrismaClient } = require('@prisma/client');
const express_1 = __importDefault(require("express"));
const prisma = new PrismaClient();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
/////////////////////////////////////////////////// Rutas para la entidad Cliente /////////////////////////////////////////////
const clienteRouter = express_1.default.Router();
clienteRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield prisma.cliente.findMany();
        res.json(clientes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al recuperar clientes.' });
    }
}));
clienteRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, identificacion } = req.body;
    try {
        const nuevoCliente = yield prisma.cliente.create({
            data: {
                nombre,
                identificacion,
                estado: 'Activo' // Estado predeterminado
            }
        });
        res.json(nuevoCliente);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear un nuevo cliente.' });
    }
}));
clienteRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, identificacion } = req.body;
    try {
        const clienteActualizado = yield prisma.cliente.update({
            where: { id: parseInt(id) },
            data: {
                nombre,
                identificacion,
            },
        });
        res.json(clienteActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el cliente.' });
    }
}));
clienteRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const clienteEliminado = yield prisma.cliente.update({
            where: { id: parseInt(id) }, // Asegúrate de convertir id a número con base 10
            data: {
                estado: 'Inactivo', // Cambia el estado a "Inactivo"
            },
        });
        res.json(clienteEliminado); // Devuelve el cliente actualizado
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el cliente.', details: error });
    }
}));
/////////////////////////////////////////////////// Rutas para la entidad Concepto //////////////////////////////////////////
const conceptoRouter = express_1.default.Router();
conceptoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conceptos = yield prisma.concepto.findMany();
        res.json(conceptos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al recuperar conceptos.' });
    }
}));
conceptoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    try {
        const nuevoConcepto = yield prisma.concepto.create({
            data: {
                descripcion,
                estado: 'Activo' // Estado predeterminado
            }
        });
        res.json(nuevoConcepto);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear un nuevo concepto.' });
    }
}));
conceptoRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion } = req.body;
    try {
        const conceptoActualizado = yield prisma.concepto.update({
            where: { id: parseInt(id) },
            data: {
                descripcion,
            },
        });
        res.json(conceptoActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el concepto.' });
    }
}));
conceptoRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const conceptoEliminado = yield prisma.concepto.update({
            where: { id: parseInt(id) },
            data: {
                estado: 'Inactivo',
            },
        });
        res.json(conceptoEliminado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el concepto.' });
    }
}));
/////////////////////////////////////////////////// Rutas para la entidad Gasto //////////////////////////////////////////
const gastoRouter = express_1.default.Router();
gastoRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gastos = yield prisma.gasto.findMany();
        res.json(gastos);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al recuperar gastos.' });
    }
}));
gastoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { clienteId, conceptoId, fecha, hora, valorGasto } = req.body;
    try {
        const nuevoGasto = yield prisma.gasto.create({
            data: {
                clienteId,
                conceptoId,
                fecha,
                hora,
                valorGasto,
                estado: 'Activo' // Estado predeterminado
            }
        });
        res.json(nuevoGasto);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear un nuevo gasto.' });
    }
}));
gastoRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { clienteId, conceptoId, fecha, hora, valorGasto } = req.body;
    try {
        const gastoActualizado = yield prisma.gasto.update({
            where: { id: parseInt(id) },
            data: {
                clienteId,
                conceptoId,
                fecha,
                hora,
                valorGasto,
            },
        });
        res.json(gastoActualizado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el gasto.' });
    }
}));
gastoRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const gastoEliminado = yield prisma.gasto.update({
            where: { id: parseInt(id) },
            data: {
                estado: 'Inactivo',
            },
        });
        res.json(gastoEliminado);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el gasto.' });
    }
}));
/////////////////////////////////////////////////// Conectar routers al app //////////////////////////////////////////
app.use('/clientes', clienteRouter);
app.use('/conceptos', conceptoRouter);
app.use('/gastos', gastoRouter);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
const cors = require('cors');
// Habilitar CORS para todas las solicitudes
app.use(cors());
app.use(cors({
    origin: 'http://localhost:8000'
}));
const httpClient_1 = require("./services/httpClient");
// Elige el cliente HTTP que deseas usar
// Puedes cambiar entre AxiosHttpClient y GotHttpClient para probar ambos
const httpClient = new httpClient_1.AxiosHttpClient();
// const httpClient: HttpClient = new GotHttpClient();
app.get('/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = 'http://localhost:8000/api/v1/pelicula'; // URL del servicio REST de tu compañero
        const data = yield httpClient.get(url);
        res.json(data);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener datos del servicio externo' });
    }
}));
