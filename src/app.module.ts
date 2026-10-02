import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module.js';
import { BooksModule } from './books/books.module.js';

@Module({
  imports: [ProductsModule, BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
