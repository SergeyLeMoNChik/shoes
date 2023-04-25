import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DirectorService {
  constructor(private prisma: PrismaService) {}

  create() {
    return this.prisma.director.create({
      data: {},
    });
  }

  findAll() {
    return this.prisma.director.findMany();
  }

  findOne(id: number) {
    return this.prisma.director.findUnique({
      where: {
        iddirector: id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.director.delete({
      where: {
        iddirector: id,
      },
    });
  }
}
