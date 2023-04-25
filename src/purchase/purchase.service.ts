import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const idShoes = []

    for (const id of createPurchaseDto.shoes_idshoes) {
      idShoes.push({shoes_idshoes: id})
    }

    return this.prisma.purchase.create({
      data: {
        purchase_date: createPurchaseDto.purchase_date,
        purchase_price: createPurchaseDto.purchase_price,
        buyer: {
          connect: {idbuyer: createPurchaseDto.buyer_idbuyer},
        },
        supplier: {
          connect: {idsupplier: createPurchaseDto.supplier_idsupplier},
        },
        shoes_purchase: {
          create: idShoes,
        },
      },
      include: {
        shoes_purchase: true,
      },
    });
  }

  async findAll() {
    return this.prisma.purchase.findMany({
      include: {
        shoes_purchase: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.purchase.findUnique({
      where: {
        idpurchase: id,
      },
      include: {
        shoes_purchase: true,
      },
    });
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    const idShoes = []

    for (const id of updatePurchaseDto.shoes_idshoes) {
      idShoes.push({shoes_idshoes: id})
    }

    return this.prisma.purchase.update({
      where: {
        idpurchase: id,
      },
      data: {
        purchase_date: updatePurchaseDto.purchase_date,
        purchase_price: updatePurchaseDto.purchase_price,
        shoes_purchase: {
          deleteMany: {},
          create: idShoes,
        },
        buyer_idbuyer: updatePurchaseDto.buyer_idbuyer,
        supplier_idsupplier: updatePurchaseDto.supplier_idsupplier,
      },
      include: {
        shoes_purchase: true,
      },
    });
  }

  async remove(id: number) {
    const deleteShoesPurchase = this.prisma.shoes_purchase.deleteMany({
      where: {
        purchase_idpurchase: id,
      },
    });

    const deletePurchase = this.prisma.purchase.delete({
      where: {
        idpurchase: id,
      },
    });

    const transaction = await this.prisma.$transaction([deleteShoesPurchase, deletePurchase]);

    return transaction;
  }
}
