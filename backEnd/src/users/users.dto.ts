import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Matches, MinLength, MaxLength } from 'class-validator';

export class ContactUsDto {
  @ApiProperty({ example: 'John Doe', description: 'Full Name of the user' })
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters' })
  name: string;

  @ApiProperty({ example: 'johndoe@example.com', description: 'User Email' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({ example: '9876543210', description: 'User Mobile Number' })
  @IsString()
  @Matches(/^[0-9]{10}$/, { message: 'Mobile number must be exactly 10 digits' })
  mobile: string;

  @ApiProperty({ example: 'I need help with my order.', description: 'User Message' })
  @IsString()
  @MinLength(10, { message: 'Message must be at least 10 characters' })
  message: string;
}
