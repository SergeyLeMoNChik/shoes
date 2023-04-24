import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkerService {
  constructor(private prisma: PrismaService) {}

  create(createWorkerDto: CreateWorkerDto) {
    return this.prisma.worker.create({
      data: createWorkerDto,
    });
  }

  findAll() {
    return this.prisma.worker.findMany();
  }

  findOne(id: number) {
    return this.prisma.worker.findUnique({
      where: {
        idworker: id,
      },
    });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.prisma.worker.update({
      where: {
        idworker: id,
      },
      data : updateWorkerDto,
    });
  }

  remove(id: number) {
    return this.prisma.worker.delete({
      where: {
        idworker: id
      },
    });
  }
}
