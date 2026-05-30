import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';
import * as fs from 'fs';
import * as handlebars from 'handlebars';
import * as nodemailer from 'nodemailer';
import { LoggerService } from 'src/utils/logger';

config();

@Injectable()
export class MailService {
  constructor(
    private readonly logger: LoggerService,
  ) {}
  private templates: { [key: string]: HandlebarsTemplateDelegate } = {
    clientContact: this.loadTemplate(
      'src/mail/templates/client-contact.hbs',
    ),
    adminContact: this.loadTemplate(
      'src/mail/templates/admin-contact.hbs',
    ),
  };
  private mailHost = process.env.MAIL_HOST;
  private mailUser = process.env.MAIL_USER;
  private mailPass = process.env.MAIL_PASS;
  private mailPort = process.env.MAIL_PORT;
  private ADMINMailUser = process.env.ADMIN_MAIL_USER;

  private loadTemplate(filePath: string): HandlebarsTemplateDelegate {
    const templateContent = fs.readFileSync(filePath, 'utf-8');
    return handlebars.compile(templateContent);
  }

  private createTransport() {
    return nodemailer.createTransport({
      host: this.mailHost,
      port: this.mailPort,
      secure: true,
      auth: {
        user: this.mailUser,
        pass: this.mailPass,
      },
    });
  }

  /**
   * Send email to both client and admin when contact form is submitted.
   */
  async sendContactMails(contactDto: any): Promise<void> {
    try {
      const transport = this.createTransport();

      // Send to client
      const clientHtml = this.templates.clientContact({
        name: contactDto.name,
        message: contactDto.message,
      });

      await transport.sendMail({
        from: this.mailUser,
        to: contactDto.email,
        subject: 'Thank you for contacting us!',
        html: clientHtml,
      });

      // Send to admin
      const adminHtml = this.templates.adminContact({contactDto});

      await transport.sendMail({
        from: this.mailUser,
        to: this.ADMINMailUser,
        subject: 'New Contact Form Submission',
        html: adminHtml,
      });

      this.logger.info('Client and Admin contact mails sent',"");
    } catch (error) {
      this.logger.error('Error sending contact mails', error.message);
    }
  }
}
