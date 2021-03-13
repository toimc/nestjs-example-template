import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseConfig } from './interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    const db = this.configService.get<DatabaseConfig>('db');
    console.log(db);
    return this.appService.getHello();
  }
}
