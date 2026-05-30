import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ContactUsDto } from './users.dto';
import { Users } from './users.model';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private contactModel: Model<Users>,
  private readonly MailService: MailService
) {}

  async createContact(contactUsDto: ContactUsDto): Promise<Users> {
    const newContact:any = new this.contactModel(contactUsDto);
    await this.MailService.sendContactMails(contactUsDto);
   const result:any=await newContact.save();
    return result
  }

  async getAllContacts(): Promise<Users[]> {
    return this.contactModel.find().lean().exec();
  }
}
