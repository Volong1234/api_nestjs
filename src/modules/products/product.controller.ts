import { Body, Controller, Delete, Get, Param, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";
import { Book} from './schemas/book.schema';
import { CreateBookDto } from "src/dto/create-book.dto";
import { UpdateBookDto } from "src/dto/update-book.dto";

import {Query as ExpressQuery} from "express-serve-static-core"

@Controller('products')

export class ProductController {

    constructor(private readonly productService: ProductService){}


    @Get() 
        async getAllBooks(@Query() query): Promise<ResponseData<Book[]>>{
        try {
            // const books = await this.productService.findAll();
            return new ResponseData<Book[]>(await this.productService.findAll(query), HttpStatus.SUCCESS, HttpMessage.SUCCESS); // Trả về ResponseData với dữ liệu là mảng books
        } catch (error) {
            return new ResponseData<Book[]>(null, HttpStatus.ERROR, HttpMessage.ERROR); 
        }
    }

    @Post()
    async create(
        @Body(new ValidationPipe()) book: CreateBookDto
    ): Promise<ResponseData<Book>>{
        try {
            return new ResponseData<Book>( await this.productService.create(book), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Book>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    async getBook(
        @Param('id') id: string
    ): Promise<ResponseData<Book>>{
        try {
            return new ResponseData<Book>(await this.productService.detailBook(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Book>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    async updateBook(@Body() book: UpdateBookDto, @Param('id') id: string): Promise<ResponseData<Book>> {
        try {
            return new ResponseData<Book>( await this.productService.updateById(id, book), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Book>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    async deleteBook(@Param('id') id: string): Promise<ResponseData<Book>> {
        try {
            return new ResponseData<Book>( await this.productService.deleteById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Book>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    // @Get()
    // getProducts(): ResponseData<Product[]> {
    //    try {
    //         return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }

    // @Post() 
    // createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<Product> {

    //     try {
    //         return new ResponseData<Product>(this.productService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    //     } catch (error) {
    //         return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    //     }
    // }

    @Get('/:id')
    detailProducts(@Param('id') id: number ): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.detailProducts(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
   
    @Put('/:id')
    updateProducts(@Body() productDto: ProductDto, @Param('id') id: number): ResponseData<Product> {
        try {
            return new ResponseData<Product>(this.productService.updateProducts(productDto, id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProducts(@Param('id') id: number): ResponseData<boolean> {
        try {
            return new ResponseData<boolean>(this.productService.deleteProducts(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<boolean>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}