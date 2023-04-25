import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SupplierService {
  constructor(private prisma: PrismaService) {}

  create(createSupplierDto: CreateSupplierDto) {
    return this.prisma.supplier.create({
      data: createSupplierDto,
    });
  }

  findAll() {
    return this.prisma.supplier.findMany();
  }

  findOne(id: number) {
    return this.prisma.supplier.findUnique({
      where: {
        idsupplier: id,
      },
    });
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.prisma.supplier.update({
      where: {
        idsupplier: id,
      },
      data: updateSupplierDto,
    });
  }

  remove(id: number) {
    return this.prisma.supplier.delete({
      where: {
        idsupplier: id,
      },
    });
  }
}
