import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/products/product.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule,
    // MongooseModule.forRoot("mongodb+srv://volong:TRrs8xoJkfGGJAq2@cluster0-volongdev.z1cpsu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-VolongDev"),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGOURL)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
