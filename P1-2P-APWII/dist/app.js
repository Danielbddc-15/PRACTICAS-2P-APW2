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
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prisma = new PrismaClient();
const prompt = (0, prompt_sync_1.default)();
/*

////////////////////////// AGREGAR DATOS A LA BD AUTOMATICAMENTE PARA USAR LA TRANSACCIONAL ////////////////////////////////
 async function main() {
  // Crear un nuevo cliente
 
 const Cliente = await prisma.cliente.create({
  data: {
    nombre: 'Kevin Pico',
    identificacion: '1234568790'
    }
  });

  console.log('Cliente creado:', Cliente);

  // Crear un nuevo concepto
  const Concepto = await prisma.concepto.create({
    data: {
      descripcion: 'Compra de computadora'
    }
  });

  console.log('Concepto creado:', Concepto);
}

main()
  .catch(err => {
    console.error('Error:', err);
  })
  .finally(async () => {
    await prisma.$disconnect();
    });

*/
///////////////////////////////////// AGREGAR DATOS DE GASTO A LA BASE DE DATOS /////////////////////////////////////////
// Definición de la función LLENAR para insertar elementos en la entidad Gasto
function LLENAR() {
    return __awaiter(this, void 0, void 0, function* () {
        const gastos = [];
        for (let i = 0; i < 1; i++) {
            // Solicitar datos al usuario por consola
            console.log(`Ingresa los datos para el gasto ${i + 1}:`);
            const clienteId = parseInt(prompt('ID del cliente: '));
            const conceptoId = parseInt(prompt('ID del concepto: '));
            const fecha = prompt('Fecha (DD/MM/AAAA): ');
            const hora = prompt('Hora (HH:MM:SS): ');
            const valorGastoStr = prompt('Valor del gasto: ');
            const valorGasto = parseFloat(valorGastoStr);
            // Verificar si la entrada es null antes de asignarla
            if (fecha !== null && hora !== null && valorGastoStr !== null) {
                // Agregar el nuevo gasto al array
                gastos.push({
                    clienteId,
                    conceptoId,
                    fecha,
                    hora,
                    valorGasto
                });
            }
            else {
                console.log('Se ingresó un valor nulo. El gasto no se registrará.');
            }
        }
        // Insertar los gastos en la base de datos
        yield prisma.gasto.createMany({
            data: gastos,
        });
    });
}
// Llamar a la función LLENAR para insertar los gastos
LLENAR()
    .then(() => {
    console.log('Gastos insertados correctamente.');
})
    .catch((error) => {
    console.error('Error al insertar los gastos:', error);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect(); // Desconectar Prisma al finalizar
}));
