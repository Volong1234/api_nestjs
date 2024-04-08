import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Category } from "src/modules/products/schemas/book.schema";

export class CreateBookDto {
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    
    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    readonly price: number;

    
    readonly category: Category;
}