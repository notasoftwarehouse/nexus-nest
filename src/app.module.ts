import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { DemoModule } from './demo/demo.module';
import { StorageModule } from './storage/storage.module';
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
    SupabaseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        url: configService.get<string>('SUPABASE_PROJECT_URL'),
        apiKey: configService.get<string>('SUPABASE_SERVICE_ROLE_KEY'),
      }),
      inject: [ConfigService],
    }),
    StorageModule,
    DemoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
