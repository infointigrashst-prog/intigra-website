import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { ContactUsDto } from './users.dto';
import { UsersService } from './users.service';
import { ApiResponse } from '../helper/apiResponse.middleware';
import { DateUtilsService } from '../helper/dateHelper';

@ApiTags('Contact Us')
@Controller('api/user/')
export class UsersController {
  constructor(private readonly UsersService: UsersService,
    private readonly dateUtilsService: DateUtilsService,
  ) {}

  @Post('contact-us')
  @ApiBody({ type: ContactUsDto })
  async createContact(@Body() contactUsDto: ContactUsDto): Promise<any> {
    const result = await this.UsersService.createContact(contactUsDto);
    // Return the result wrapped in an array since ApiResponse expects an array of data
    return ApiResponse(
      200,
      'Success',
      true,
      [result],
      [result].length,
      false,
    );
  }

  @Get('contact-us')
  async getAllContacts(): Promise<any> {
    const result:any = await this.UsersService.getAllContacts()
    const dateconvert = () => {
      return result.map((res: any) => ({
        ...res,
        createdAt:  this.dateUtilsService.dateToDDMMYYYY(res?.createdAt),
        updatedAt:  this.dateUtilsService.dateToDDMMYYYY(res?.updatedAt),
      }));
    };
    const data = dateconvert() as any;
    // Return the result (which is an array of Users) directly
    return ApiResponse(200, 'Success', true, data, result.length, false);
  }
}
