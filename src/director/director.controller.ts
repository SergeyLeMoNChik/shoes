import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { DirectorService } from './director.service';

@Controller('directors')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  @Post()
  create() {
    return this.directorService.create();
  }

  @Get()
  findAll() {
    return this.directorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(+id);
  }
}
