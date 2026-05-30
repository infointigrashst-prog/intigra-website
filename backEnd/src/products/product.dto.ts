import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Red Saree',
    description: 'The title of the product',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Beautiful silk saree',
    description: 'Product description',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 2999, description: 'Price of the product' })
  @IsNumber()
  price: number;
}
export class UpdateProductDto {
  @ApiProperty({ example: 12, description: 'prodId' })
  @IsNumber()
  prodId: number;

  @ApiProperty({
    example: 'Red Saree',
    description: 'The title of the product',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Beautiful silk saree',
    description: 'Product description',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 2999, description: 'Price of the product' })
  @IsNumber()
  price: number;
}
