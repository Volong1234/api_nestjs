import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { Product } from "src/models/product.model";
import { ProductDto } from "src/dto/product.dto";

@Controller('products')

export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    getProducts(): ResponseData<Product[]> {
       try {
            return new ResponseData<Product[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post() 
    createProduct(@Body(new ValidationPipe()) productDto: ProductDto): ResponseData<Product> {

        try {
            return new ResponseData<Product>(this.productService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

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
    deleteProducts(): ResponseData<string> {
        try {
            return new ResponseData<string>(this.productService.deleteProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}