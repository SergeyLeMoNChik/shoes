import { Injectable } from '@nestjs/common';
import { CreateSallerDto } from './dto/create-saller.dto';
import { UpdateSallerDto } from './dto/update-saller.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SallerService {
  constructor(private prisma: PrismaService) {}

  create(createSallerDto: CreateSallerDto) {
    return this.prisma.saller.create({
      data: createSallerDto,
    });
  }

  findAll() {
    return this.prisma.saller.findMany();
  }

  findOne(id: number) {
    return this.prisma.saller.findUniqueOrThrow({
      where: {
        idsaller: id,
      },
    });
  }

  update(id: number, updateSallerDto: UpdateSallerDto) {
    return this.prisma.saller.update({
      where: {
        idsaller: id,
      },
      data: updateSallerDto,
    });
  }

  remove(id: number) {
    return this.prisma.saller.delete({
      where: {
        idsaller: id,
      },
    });
  }
}
