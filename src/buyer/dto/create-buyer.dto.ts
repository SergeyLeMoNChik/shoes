import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBuyerDto {
    
    @IsString()
    fullname: string;

    @IsString()
    pasportdata: string;

    @Type(()=> Date)
    @IsDate()
    data_of_employment: Date;

    director_iddirector: number;
}
