import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoesService } from './shoes.service';
import { CreateShoeDto } from './dto/create-shoe.dto';
import { UpdateShoeDto } from './dto/update-shoe.dto';
import { Shoe } from './entities/shoe.entity'

@Controller('shoes')
export class ShoesController {
  constructor(private readonly shoesService: ShoesService) {}

  @Post()
  async create(@Body() createShoeDto: CreateShoeDto) {
    return new Shoe( 
      await this.shoesService.create(createShoeDto) 
    );
  }

  @Get()
  async findAll() {
    const shoes = await this.shoesService.findAll();
    return shoes.map((shoe) => new Shoe(shoe));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const shoe = await this.shoesService.findOne(+id);
    return new Shoe(shoe)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShoeDto: UpdateShoeDto) {
    return new Shoe(
      await this.shoesService.update(+id, updateShoeDto)
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new Shoe(
      await this.shoesService.remove(+id)
    );
  }
}
