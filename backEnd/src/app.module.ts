import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [ProductsModule,UsersModule,MongooseModule.forRoot(process.env.MONGO_URL),]
})
export class AppModule {}
