import {Injectable} from '@nestjs/common'
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';
import { Book} from './schemas/book.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from 'src/dto/create-book.dto';
import {Query } from "express-serve-static-core"
@Injectable() 

export class ProductService {
    
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) {}
  
    async findAll(query: Query): Promise<Book[]> {
        console.log(query)
        const keyword = query.keyword ? {
          title: {
            $regex: query.keyword,
            $options: 'i',
          }
        } : {};
        const books = await this.bookModel.find({}); 
        return books;
    }

    async create(book: CreateBookDto): Promise<Book> {
         const books = await this.bookModel.create(book); 
         return books;
    }

    async detailBook(id: string): Promise<Book> {
        const books = await this.bookModel.findById(id)
        return books;
    }

    async updateById(id: string, book: Book): Promise<Book> {
        return this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        })
    }

    async deleteById(id: string): Promise<Book> {
        return this.bookModel.findByIdAndDelete(id)
    }
     
   private products: Product[] = [
    {id:1, categoryId: 2, price: 8000, productName: "Keyboard"},
    {id:2, categoryId: 3, price: 9000, productName: "Keyboard XXXXX"}
   ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(productDto: ProductDto): Product {
        const product: Product = {
            id: Math.random(),
            ...productDto,
            
        };
        this.products.push(product);
        return product;
    }

    detailProducts(id: number): Product {
        return this.products.find(item => item.id == id)
    }
   
    updateProducts(productDto: ProductDto, id: number): Product{
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].productName = productDto.productName;
        this.products[index].price = productDto.price;
        return this.products[index];
    }

    deleteProducts(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.slice(index, 1)
            return true;
        }
        return false;
       
    }
}