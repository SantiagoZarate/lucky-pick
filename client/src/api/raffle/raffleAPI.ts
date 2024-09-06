import envs from '@/config/envs';
import { RaffleAPI } from '.';

const ENDPOINT = envs.RAFFLE_API_URL + '/api/raffles';

export const raffleAPI: RaffleAPI = {
  async getAll() {
    return fetch(ENDPOINT).then((response) => response.json());
  },
  async create(data) {
    return fetch(ENDPOINT, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  },
  async getOne(id) {
    return fetch(ENDPOINT + `/${id}`).then((response) => response.json());
  },
};
