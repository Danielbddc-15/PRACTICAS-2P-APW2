import { Router } from 'express';

import { ConceptoRoutes } from './concepto/Routes';
import { ClienteRoutes } from './cliente/Routes';
import { GastoRoutes } from './gasto/Routes';
import { GitHubRoutes } from './github/Routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();

   
    router.use('/api/conceptos', ConceptoRoutes.routes);
    router.use('/api/clientes', ClienteRoutes.routes);
    router.use('/api/gastos', GastoRoutes.routes);
    router.use('/github', GitHubRoutes.routes);
    return router;
  }
}
