import { Injectable } from '@nestjs/common';

@Injectable()
export class DateUtilsService {
  dateNowYyyyMMddHHmmss(): string {
    const d = new Date();
    const dformat =
      [this.padLeft(d.getFullYear()), this.padLeft(d.getMonth() + 1), this.padLeft(d.getDate())].join('-') +
      ' ' +
      [this.padLeft(d.getHours()), this.padLeft(d.getMinutes()), this.padLeft(d.getSeconds())].join(':');
    return dformat;
  }

  dateToMMDDYYYY(value: string): string {
    if (value && value !== '-Infinity') {
      if (value !== null && value.toString().length > 0) {
        return this.convertDateFormat(value.toString());
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  dateToDDMMYYYY(date: any): string {
    
    if (!date) return '';

    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) {
      console.error('Invalid date:', date);
      return '';
    }

    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
  }

  private padLeft(value: number, length: number = 2): string {
    return String(value).padStart(length, '0');
  }

  private convertDateFormat(e: string): string {
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const parts = e.split(' ');
    if (parts[3] === '1753' || parts[3] === '1752') {
      return '';
    }
    const dateParts = parts.filter((res, i) => i === 1 || i === 2 || i === 3);
    let monthSet = months.indexOf(dateParts[0].toLowerCase()) + 1 as any;
    if (monthSet <= 9) {
      monthSet = '0' + monthSet; // Convert monthSet to string with leading zero
    } else {
      monthSet = String(monthSet); // Ensure monthSet is a string
    }
    return `${dateParts[1]}-${monthSet}-${dateParts[2]}`;
  }
}
