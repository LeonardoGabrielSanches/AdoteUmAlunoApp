import axios from 'axios';

class Api {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://10.0.2.2:3333', // Trocar pra api do expo
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
        error = e.data.error.response;
      });

    return error;
  }

  async createUser(body: any): Promise<any> {
    let message = '';

    await this.api
      .post('/user', body)
      .then(// Cria algo de sucesso
      )
      .catch((e: any) => {
        message = e.data.error.response;
        return message;
      });

    return undefined;
  }
}

export default Api;
