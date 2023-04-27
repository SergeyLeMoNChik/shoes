import { IsDate, IsInt, IsLatLong, IsNumber, isInt } from 'class-validator';
import { Type } from 'class-transformer';
import { isInt32Array } from 'util/types';

export class CreateSaleDto {
    @Type(()=> Date)
    @IsDate()
    sale_date: Date;

    @IsLatLong()
    sale_price: number;

    @IsNumber()
    @IsInt()
    saller_idsaller: number;

    @IsNumber()
    shoes_idshoes: number[];
}
