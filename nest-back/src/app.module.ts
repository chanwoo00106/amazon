import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/amazon'),
    ProductModule,
  ],
  providers: [AppService],
})
export class AppModule {}
