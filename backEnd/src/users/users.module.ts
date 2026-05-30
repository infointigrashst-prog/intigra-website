import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ContactSchema } from './users.model';
import { DateUtilsService } from '../helper/dateHelper';
import { MailService } from 'src/mail/mail.service';
import { LoggerService } from 'src/utils/logger';

@Module({
    imports:[MongooseModule.forFeature([{name:'Users',schema:ContactSchema}])],
    controllers: [UsersController],
    providers: [UsersService,DateUtilsService,MailService,LoggerService],
})
export class UsersModule {}
