import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';
import { v4 as Uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  create(createProductDto: CreateProductDto) {
    const { name, description, price, stock, category } = createProductDto;
    if (stock <0) {
      return {
      status: 402,
      msg: "Stock debe de ser positivo",
    };
    }
    const newProduct = new Product(Uuidv4(), name, price, stock, category,description);
    this.products.push(newProduct);
    return newProduct;
  }

  //Otro comentario.

  findAll(category?: string) {
    return this.products;
  }

  findOne(id: string): Product {
    const product = this.products.find((Product) =>
      Product.id == id);
    if (!product) {
      throw new NotFoundException(`Product with ${id} not found`);
    }
    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const { name, description, price, stock, category } = updateProductDto;
    const product = this.findOne(id);
    product.updateWith({ name, description, price, stock, category });

    return product;
  }

  remove(id: string) {
    const product = this.findOne(id);

    this.products = this.products.filter((product) => product.id !== id);
    return {
      status: 200,
      msg: "Producto eliminado con éxito",
      product: product
    };
  }


}
