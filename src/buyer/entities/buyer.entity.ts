import { buyer } from "@prisma/client";

export class Buyer {
    FullName: string;

    PassportData: string;

    DataOfEmployment: Date;

    DirectorID: number;

    constructor(partial: Partial<buyer>) {
        this.FullName = partial.fullname;
        this.PassportData = partial.pasportdata;
        this.DataOfEmployment = partial.data_of_employment;
        this.DirectorID = partial.director_iddirector;
    }
}
