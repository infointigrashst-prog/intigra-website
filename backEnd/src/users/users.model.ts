import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Users extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: true })
  mobile: string;

  @Prop({ required: false })
  message: string;
}

export const ContactSchema = SchemaFactory.createForClass(Users);
