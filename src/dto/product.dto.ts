import { MinLength, IsNotEmpty, IsNumber } from "class-validator";

export class ProductDto {

    @IsNotEmpty()
    categoryId?: number;

    @MinLength(5, {message: "This file must be than 5 character Long!"})
    productName?: string;
    
    @IsNumber()
    price?:number;
}