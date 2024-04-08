import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PostSchema } from "src/models/post.model";
import { BookSchema } from "./schemas/book.schema";

@Module({
  imports:[
    MongooseModule.forFeature([
      {
         name: 'Book',
         schema: BookSchema,
      },
    ])
  ],
  controllers:[ProductController],
  providers:[ProductService],
  
})

export class ProductModule{};