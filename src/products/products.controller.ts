import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query, Optional } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()// Valida que los datos enviados sean válidos
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
   /* console.log(createProductDto);
   return createProductDto; */
  }

  @Get()  
  findAll(@Query("category") category?: string) {
    return this.productsService.findAll(category);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.remove(id);
  }
}
