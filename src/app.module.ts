import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Configuration from './config/configuration';

// const envPath = `.env.${process.env.NODE_ENV || 'development'}`;
// console.log('🚀 ~ file: app.module.ts ~ line 7 ~ envPath', envPath);

@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: envPath,
      load: [Configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
