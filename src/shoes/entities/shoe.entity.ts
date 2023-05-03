import { shoes } from "@prisma/client";

export class Shoe{
    id: number;

    model: string;

    size: number;

    article: string;

    season: string;

    brand: string;

    sex: string;

    price: number;

    amount: number;

    constructor(partial: Partial<shoes>) {
        this.id = partial.idshoes;
        this.model = partial.model;
        this.size = Number(partial.size);
        this.article = partial.article;
        this.season = partial.season;
        this.brand = partial.brand;
        this.sex = partial.sex;
        this.price = Number(partial.price);
        this.amount = Number(partial.amount) ;
    }
}
