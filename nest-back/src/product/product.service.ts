import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async findAll() {
    return this.productModel.find().exec();
  }

  async findById(id: string) {
    try {
      return await this.productModel.findById(id).exec();
    } catch {
      throw new NotFoundException(`'${id}' is Not Found`);
    }
  }

  async createProduct(name: string, price: number, description?: string) {
    const newProduct = new this.productModel({ name, price, description });
    return newProduct.save();
  }

  async update(id: string, name: string, price: number, description?: string) {
    const product = await this.productModel.findById(id);

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.description = description ?? product.description;

    return product.save();
  }

  async delete(id: string) {
    await this.findById(id);
    return this.productModel.deleteOne({ id });
  }
}
