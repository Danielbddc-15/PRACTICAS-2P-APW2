// github.routes.ts
import { Router } from 'express';
import { GitHubController } from '../github/Controller';

export class GitHubRoutes {
  static get routes(): Router {
    const router = Router();
    const token = process.env.GITHUB_TOKEN || '';
    const githubController = new GitHubController(token);

    router.get('/repos', githubController.getRepos);

    return router;
  }
}
