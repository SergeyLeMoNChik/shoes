import { IsNotEmpty } from "class-validator";

export class CreateShoeDto {
    @IsNotEmpty()
    model: string;

    @IsNotEmpty()
    size: number;

    @IsNotEmpty()
    article: string;

    @IsNotEmpty()
    season: string;

    @IsNotEmpty()
    brand: string;

    @IsNotEmpty()
    sex: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    amount: number;
}
