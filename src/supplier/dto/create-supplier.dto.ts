import { IsString } from "class-validator";

export class CreateSupplierDto {

    @IsString()
    supplier_name: string;
    
    @IsString()
    address: string;
}
