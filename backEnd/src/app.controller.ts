import { Controller, Get } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller('health')
export class AppController {
  constructor(
    @InjectConnection() private readonly connection: Connection,
  ) {}

  @Get()
  @ApiOperation({ summary: 'MongoDB keep-alive and backend health status check' })
  async checkDbHealth() {
    try {
      // Run a database ping command
      const adminDb = this.connection.db.admin();
      const pingResult = await adminDb.ping();

      return {
        status: 'UP',
        database: 'MongoDB Active & Healthy',
        ping: pingResult,
        timestamp: new Date().toISOString(),
      };
    } catch (error:any) {
      return {
        status: 'DOWN',
        database: 'MongoDB Connection Error',
        error: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}
