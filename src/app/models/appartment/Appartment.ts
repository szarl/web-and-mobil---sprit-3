export class Appartament {
    id!: number;
    name!: string;
    imagePath!: string;
    description!: string;
  
    constructor(init?: Partial<Appartament>) {
      Object.assign(this, init);
    }
  }
  