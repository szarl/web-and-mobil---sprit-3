import axios, { AxiosError } from 'axios';
import config from '../env/local';
import { Appartament } from '../models/appartment/Appartment';

export const appartamentService = new class AppartamentService {
  private readonly CONTROLLER_URL = 'appartments';

  async getAppartaments(): Promise<Appartament[]> {
    const url = `${config.serviceHostnameUrl}/${this.CONTROLLER_URL}`;
    try {
      const response = await axios.get(url, {});
      console.log(response.data);
      return response.data.map((item: any) => {
        return new Appartament({
          id: item.id,
          name: item.name,
          imagePath: `assets/apartments/apartment-${item.id}.jpg`,
          description: item.description
        });
      });
    } catch (error: AxiosError | any) {
      if (error?.response?.data?.message) {
        throw new Error(`Connection error: ${error.response.data.message}`);
      } else {
        throw new Error(`Connection error: ${error.message}`);
      }
    }
  }
}();
