import { Injectable } from '@nestjs/common';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class BuyerService {
  constructor(private prisma: PrismaService) {}

  create(createBuyerDto: CreateBuyerDto) {
    return this.prisma.buyer.create({
      data: createBuyerDto,
    });
  }

  findAll() {
    return this.prisma.buyer.findMany();
  }

  findOne(id: number) {
    return this.prisma.buyer.findUnique({
      where: {
        idbuyer: id,
      },
    });
  }

  update(id: number, updateBuyerDto: UpdateBuyerDto) {
    return this.prisma.buyer.update({
      where: {
        idbuyer: id,
      },
      data: updateBuyerDto,
    });
  }

  remove(id: number) {
    return this.prisma.buyer.delete({
      where: {
        idbuyer: id,
      },
    });
  }
}
