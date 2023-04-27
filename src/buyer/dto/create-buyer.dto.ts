import { IsDate, IsNumber, IsPassportNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBuyerDto {
    
    @IsString()
    fullname: string;

    @IsPassportNumber("643")
    pasportdata: string;

    @Type(()=> Date)
    @IsDate()
    data_of_employment: Date;

    @IsNumber()
    director_iddirector: number;
}
