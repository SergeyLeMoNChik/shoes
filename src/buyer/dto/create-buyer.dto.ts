import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBuyerDto {
    fullname: string;
    passportdata: string;

    @Type(()=> Date)
    @IsDate()
    data_of_employment: Date;
    director_iddirectoe: number;
}
