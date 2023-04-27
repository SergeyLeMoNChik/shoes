import { IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSallerDto {
    @IsNotEmpty()
    fullname: string;
    @IsNotEmpty()
    pasportdata: string;

    @Type(()=> Date)
    @IsDate()
    data_of_employment: Date;
    director_iddirector; number;
}
