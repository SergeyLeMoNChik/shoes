import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePurchaseDto {
    @Type(()=> Date)
    @IsDate()
    purchase_date: Date;
    purchase_price: number;
    supplier_idsupplier: number;
    buyer_idbuyer: number;

    shoes_idshoes: number[];
}
