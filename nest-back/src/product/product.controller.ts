import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  createProduct(
    @Body('name') name: string,
    @Body('price') price: string,
    @Body('description') description?: string,
  ) {
    return this.productService.createProduct(name, +price, description);
  }
}
