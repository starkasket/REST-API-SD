import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { Book } from './entities/book.entity.js';
import { v4 as Uuidv4 } from 'uuid';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  create(createBookDto: CreateBookDto) {
    const { title, author, year, genre, price } = createBookDto;
    const newBook = new Book(Uuidv4(), title, author, year, genre, price);
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books
  }

  findOne(id: string): Book {
    const book = this.books.find((book) => book.id == id)
    if (!book) {
      throw new NotFoundException(`Book with ID: ${id} not found`);
    }
    return book;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    const { title, author, year, genre, price } = updateBookDto;
    const book = this.findOne(id);
    book.updateWith( {title, author, year, genre, price });

    return book;

  }

  remove(id: string) {
    const book = this.findOne(id);
    this.books = this.books.filter((book) => book.id !== id);
    return {
      status: 200,
      msg: "Libro eliminado con éxito",
      book: book
    };
  }
}
