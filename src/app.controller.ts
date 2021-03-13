import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as config from 'config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const server = config.get('server');
    console.log(server);
    return this.appService.getHello();
  }
}
