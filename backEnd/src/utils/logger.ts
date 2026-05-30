import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as moment from 'moment-timezone';
import * as fs from 'fs';
import * as path from 'path';
import 'winston-daily-rotate-file';

@Injectable()
export class LoggerService {
  private infoLogger: winston.Logger;
  private errorLogger: winston.Logger;
  private PROJECT_ROOT: string = path.join(__dirname, '..');

  constructor() {
    const logsDir = path.join(__dirname, 'logs');

    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir);
    }

    const DailyRotateFile = require('winston-daily-rotate-file'); // Ensure this line is added

    this.infoLogger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        }),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level.toUpperCase()}]  : ${message}`;
        }),
      ),
      transports: [
        new DailyRotateFile({
          filename: 'logs/info-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          level: 'info',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
      ],
    });

    this.errorLogger = winston.createLogger({
      level: 'error',
      format: winston.format.combine(
        winston.format.timestamp({
          format: () => moment().format('YYYY-MM-DD HH:mm:ss'),
        }),
        winston.format.printf(({ timestamp, level, message, filename }) => {
          return `${timestamp} [${level.toUpperCase()}] (${filename}): ${message}`;
        }),
      ),
      transports: [
        new DailyRotateFile({
          filename: 'logs/error-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          level: 'error',
          zippedArchive: true,
          maxSize: '20m',
          maxFiles: '14d',
        }),
      ],
    });
  }

  info(functionName: string, message: any) {
    this.infoLogger.info(
      `Path: ${this.formatLogArguments(message)} | Function: ${functionName} \nMessage: ${JSON.stringify(message)}`,
    );
  }

  error(functionName: string, message: any) {
    this.errorLogger.error(
      `Path: ${this.formatLogArguments(message)} | Function: ${functionName} \nMessage: ${JSON.stringify(message)}`,
    );
  }

  private formatLogArguments(args: any) {
    const stackInfo = this.getStackInfo(1);
    let calleeStr = '';
    if (stackInfo) {
      calleeStr = `:${stackInfo.relativePath} | Line:${stackInfo.line}:${stackInfo.pos} | File: ${stackInfo.file}`;
    }
    return calleeStr;
  }

  private getStackInfo(stackIndex: number) {
    const stacklist = new Error().stack.split('\n').slice(3);
    const stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/gi;
    const stackReg2 = /at\s+()(.*):(\d*):(\d*)/gi;
    const s = stacklist[stackIndex] || stacklist[0];
    const sp = stackReg.exec(s) || stackReg2.exec(s);

    if (sp && sp.length === 5) {
      return {
        method: sp[1],
        relativePath: path.relative(this.PROJECT_ROOT, sp[2]),
        line: sp[3],
        pos: sp[4],
        file: path.basename(sp[2]),
        stack: stacklist.join('\n'),
      };
    }
  }
}
