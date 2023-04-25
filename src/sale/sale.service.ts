import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  async create(createSaleDto: CreateSaleDto) {
    const idShoes = []

    for (const id of createSaleDto.shoes_idshoes) {
      idShoes.push({shoes_idshoes: id})
    }

    return this.prisma.sale.create({
      data: {
        sale_date: createSaleDto.sale_date,
        sale_price: createSaleDto.sale_price,
        shoes_sale: {
          create: idShoes,
        },
        saller: {
          connect: {idsaller: createSaleDto.saller_idsaller},
        },
      },
      include: {
        shoes_sale: true,
      },
    });
  }

  async findAll() {
    return this.prisma.sale.findMany({
      include: {
        shoes_sale: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.sale.findUnique({
      where: {
        idsale: id,
      },
      include: {
        shoes_sale: true,
      },
    });
  }

  async update(id: number, updateSaleDto: UpdateSaleDto) {
    const idShoes = []

    for (const id of updateSaleDto.shoes_idshoes) {
      idShoes.push({shoes_idshoes: id})
    }

    return this.prisma.sale.update({
      where: {
        idsale: id,
      },
      data: {
        sale_date: updateSaleDto.sale_date,
        sale_price: updateSaleDto.sale_price,
        shoes_sale: {
          deleteMany: {},
          create: idShoes,
        },
        saller_idsaller: updateSaleDto.saller_idsaller,
      },
      include: {
        shoes_sale: true,
      },
    });
  }

  async remove(id: number) {
    const deleteShoesSale = this.prisma.shoes_sale.deleteMany({
      where: {
        sale_idsale: id,
      },
    });

    const deleteSale = this.prisma.sale.delete({
      where: {
        idsale: id,
      },
    });

    const transaction = await this.prisma.$transaction([deleteShoesSale, deleteSale]);

    return transaction;
  }
}
