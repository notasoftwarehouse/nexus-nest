import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DemoModule } from './demo/demo.module';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        databaseUrl: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    DemoModule,
    StorageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
