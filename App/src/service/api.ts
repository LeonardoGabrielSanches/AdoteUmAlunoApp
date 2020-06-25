import axios from 'axios';

export class Api {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://10.0.2.2:3333',
    });
  }

  async login(body: any): Promise<string> {
    let error = '';

    await this.api
      .post('/login', body)
      .then((response: any) => {
        if (response.status === 204) {
          error = 'Usuário e/ou senha inválidos';
        } else if (response.status === 202) {
          error = response.data?.error;
        }
      })
      .catch((e: any) => {
        console.log(e.data.error);
        error = e.data;
      });

    return error;
  }
}
