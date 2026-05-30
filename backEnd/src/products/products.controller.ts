import { 
  Controller, 
  Post, 
  Body, 
  Get, 
  Param, 
  Patch, 
  Delete 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@ApiTags('Products')
@Controller('/api/')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('products')
  @ApiOperation({ summary: 'Add a new product' })
  @ApiResponse({ status: 201, description: 'Product created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  addProduct(@Body() createProductDto: CreateProductDto) {
    const generatedId = this.productsService.insertProduct(
      createProductDto.title,
      createProductDto.description,
      createProductDto.price,
    );
    console.log(generatedId,"generatedId") 
    return { id: generatedId };
  }

  @Get('products')
  @ApiOperation({ summary: 'Get all products' })
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get('products/:id')
  @ApiOperation({ summary: 'Get a product by ID' })
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch('products/:id')
  @ApiOperation({ summary: 'Update a product' })
  updateProduct(@Param('id') prodId: string, @Body() updateProductDto: UpdateProductDto) {
    this.productsService.updateProduct(
      prodId,
      updateProductDto.title,
      updateProductDto.description,
      updateProductDto.price,
    );
    return { message: 'Product updated successfully' };
  }

  @Delete('products/:id')
  @ApiOperation({ summary: 'Delete a product' })
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return { message: 'Product deleted successfully' };
  }
}
