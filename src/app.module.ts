import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DemoModule } from './demo/demo.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
