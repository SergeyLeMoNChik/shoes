import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSallerDto {
    fullname: string;
    pasportdata: string;

    @Type(()=> Date)
    @IsDate()
    data_of_employment: Date;
    director_iddirector; number;
}