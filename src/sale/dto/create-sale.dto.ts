import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSaleDto {
    @Type(()=> Date)
    @IsDate()
    sale_date: Date;
    sale_price: number;
    saller_idsaller: number;

    shoes_idshoes: number[];
}
