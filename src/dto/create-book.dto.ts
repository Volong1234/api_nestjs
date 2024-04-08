import { Category } from "src/modules/products/schemas/book.schema";

export class CreateBookDto {
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly category: Category;
}