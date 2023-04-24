import axios from 'axios';
import config from '../env/local';
import { Appartament } from '../models/appartment/Appartment';

export const appartamentServcie = new class AppartamentService {
    private readonly CONTROLLER_URL = 'appartments';
    
    async getAppartaments(): Promise<any> {
        const url = `${config.serviceHostnameUrl}/${this.CONTROLLER_URL}`;
        return axios.get(url, {}).then((data) => {
            console.log(data);
            return data;
        }, (error) => {
            throw new Error(`Connection errror: ${error}`);
        });
    }
}();
