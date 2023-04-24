import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShoesService {
  constructor(private prisma: PrismaService) {}

  create(createShoeDto: CreateShoeDto) {
    return this.prisma.shoes.create({
      data: createShoeDto,
    });
  }

  findAll() {
    return this.prisma.shoes.findMany()
  }

  findOne(id: number) {
    return this.prisma.shoes.findUnique({
      where: {
        idshoes: id,
      },
    });
  }

  update(id: number, updateShoeDto: UpdateShoeDto) {
    return this.prisma.shoes.update({
      where: {
        idshoes: id,
      },
      data : updateShoeDto,
    });
  }

  remove(id: number) {
    return this.prisma.shoes.delete({
      where: {
        idshoes: id
      },
    });
  }
}
