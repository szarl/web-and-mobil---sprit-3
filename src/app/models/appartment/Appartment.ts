
export class Appartament {
    id!: number;
    name!: string;
    img_url!: string;
    
    constructor(data?: Partial<Appartament>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}