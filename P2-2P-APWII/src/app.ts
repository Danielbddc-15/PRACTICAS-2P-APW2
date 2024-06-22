import { envs } from './Config/envs';
import { AppRoutes } from './Presentation/Routes';
import { Server } from './Presentation/Server';




(async()=> {
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });

  server.start();
}