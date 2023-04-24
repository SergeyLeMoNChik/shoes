import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWorkerDto {
    fullname: string;
    passportdata: string;
    
    @Type(() => Date)
    @IsDate()
    data_of_employment: Date;
}
