// github.controller.ts
import { Request, Response } from 'express';
import { GitHubRepository } from '../../Infrastructure/Repositories/github.repository';
import { GitHubDatasource } from '../../Infrastructure/Datasources/github.datasource';

export class GitHubController {
  private readonly repository: GitHubRepository;

  constructor(token: string) {
    const datasource = new GitHubDatasource(token);
    this.repository = new GitHubRepository(datasource);
  }

  public getRepos = async (req: Request, res: Response) => {
    try {
      const repos = await this.repository.getRepos();
      res.json(repos);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching repositories from GitHub' });
    }
  };
}
