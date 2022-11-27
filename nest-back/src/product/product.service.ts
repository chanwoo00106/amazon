import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  findAll() {
    return this.productModel.find();
  }

  createProduct(name: string, price: number, description?: string) {
    const newProduct = new this.productModel({ name, price, description });
    return newProduct.save();
  }
}
