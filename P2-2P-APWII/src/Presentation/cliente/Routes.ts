import { Router } from 'express';
import { ClientesController } from './Controller';
import { ClienteDatasourceImpl } from '../../Infrastructure/Datasources/cliente.datasource.impl';
import { ClienteRepositoryImpl } from '../../Infrastructure/Repositories/cliente.repository.impl';

export class ClienteRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ClienteDatasourceImpl();
    const clienteRepository = new ClienteRepositoryImpl(datasource);
    const clienteController = new ClientesController(clienteRepository);

    router.get('/', clienteController.getCliente);
    router.get('/:id', clienteController.getClienteById);
    
    router.post('/', clienteController.createCliente);
    router.put('/:id', clienteController.updateCliente);
    router.delete('/:id', clienteController.deleteCliente);

    return router;
  }
}
