import { Category } from "src/modules/products/schemas/book.schema";

export class UpdateBookDto {
    readonly title: string;
    readonly description: string;
    readonly price: number;
    readonly category: Category;
}