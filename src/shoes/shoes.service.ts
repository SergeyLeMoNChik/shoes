import { Injectable } from '@nestjs/common';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShoesService {
  constructor(private prisma: PrismaService) {}

  async create(createShoeDto: CreateShoeDto) {
    return this.prisma.shoes.create({
      data: createShoeDto,
    });
  }

  async findAll() {
    return this.prisma.shoes.findMany();
  }

  async findOne(id: number) {
    return this.prisma.shoes.findUniqueOrThrow({
      where: {
        idshoes: id,
      },
    });
  }

  async update(id: number, updateShoeDto: UpdateShoeDto) {
    return this.prisma.shoes.update({
      where: {
        idshoes: id,
      },
      data : updateShoeDto,
    });
  }

  async remove(id: number) {
    return this.prisma.shoes.delete({
      where: {
        idshoes: id,
      },
    });
  }
}
