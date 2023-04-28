import { IsDate, IsInt, IsLatLong, IsNumber, isInt } from 'class-validator';
import { Type } from 'class-transformer';
import { isInt32Array } from 'util/types';

export class CreateSaleDto {
    @Type(()=> Date)
    @IsDate()
    sale_date: Date;

    @IsNumber()
    sale_price: number;

    @IsNumber()
    saller_idsaller: number;

    shoes_idshoes: number[];
}
