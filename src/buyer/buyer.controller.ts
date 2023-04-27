import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuyerService } from './buyer.service';
import { CreateBuyerDto } from './dto/create-buyer.dto';
import { UpdateBuyerDto } from './dto/update-buyer.dto';

@Controller('buyers')
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Post()
  async create(@Body() createBuyerDto: CreateBuyerDto) {
    return this.buyerService.create(createBuyerDto);
  }

  @Get()
  async findAll() {
    return this.buyerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.buyerService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBuyerDto: UpdateBuyerDto) {
    return this.buyerService.update(+id, updateBuyerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.buyerService.remove(+id);
  }
}
