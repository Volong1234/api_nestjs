import {Injectable} from '@nestjs/common'
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable() 

export class ProductService {

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
   
    updateProducts(): string {
        return "Update product";
    }

    deleteProducts(): string {
        return "Delete Product";
    }
}