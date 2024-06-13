import { Router } from 'express';
import { ConceptosController } from './Controller';
import { ConceptoDatasourceImpl } from '../../Infrastructure/Datasources/concepto.datasource.impl';
import { ConceptoRepositoryImpl } from '../../Infrastructure/Repositories/concepto.repository.impl';

export class ConceptoRoutes {

  static get routes(): Router {

    const router = Router();

    const datasource = new ConceptoDatasourceImpl();
    const conceptoRepository = new ConceptoRepositoryImpl(datasource);
    const conceptoController = new ConceptosController(conceptoRepository);

    router.get('/', conceptoController.getConcepto);
    router.get('/:id', conceptoController.getConceptoById);
    
    router.post('/', conceptoController.createConcepto);
    router.put('/:id', conceptoController.updateConcepto);
    router.delete('/:id', conceptoController.deleteConcepto);

    return router;
  }
}
