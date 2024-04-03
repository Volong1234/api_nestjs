import {Injectable} from '@nestjs/common'
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

    createProduct():string {
        return "Post Product";
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