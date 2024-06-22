// github.datasource.ts
import axios from 'axios';

export class GitHubDatasource {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  public async getRepos(): Promise<any[]> {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }
}
