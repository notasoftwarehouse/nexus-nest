import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MutexModule } from './mutex/mutex.module';
import { SharpModule } from './sharp/sharp.module';
import { DemoModule } from './demo/demo.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        databaseUrl: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    MutexModule,
    SharpModule,
    DemoModule,
    SupabaseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        url: configService.get<string>('SUPABASE_PROJECT_URL'),
        apiKey: configService.get<string>('SUPABASE_SERVICE_ROLE_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
