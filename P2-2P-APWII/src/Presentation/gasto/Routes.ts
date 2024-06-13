import { Router } from 'express';
import { GastosController } from './Controller';
import { GastoDatasourceImpl } from '../../Infrastructure/Datasources/gasto.datasource.impl';
import { GastoRepositoryImpl } from '../../Infrastructure/Repositories/gasto.repository.impl';

export class GastoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new GastoDatasourceImpl();
    const gastoRepository = new GastoRepositoryImpl(datasource);
    const gastoController = new GastosController(gastoRepository);

    router.get('/', gastoController.getGasto);
    router.get('/:id', gastoController.getGastoById);
    
    router.post('/', gastoController.createGasto);
    router.put('/:id', gastoController.updateGasto);
    router.delete('/:id', gastoController.deleteGasto);

    return router;
  }
}
