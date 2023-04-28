import { shoes } from "@prisma/client";

export class Shoe{
    Id: number;

    Model: string;

    Size: number;

    Article: string;

    Season: string;

    Brand: string;

    Sex: string;

    Price: number;

    Amount: number;

    constructor(partial: Partial<shoes>) {
        this.Id = partial.idshoes;
        this.Model = partial.model;
        this.Size = partial.size;
        this.Article = partial.article;
        this.Season = partial.season;
        this.Brand = partial.brand;
        this.Sex = partial.sex;
        this.Price = partial.price;
        this.Amount = partial.amount;
    }
}
