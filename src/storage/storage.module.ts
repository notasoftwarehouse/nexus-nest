import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    SupabaseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        url: configService.get<string>('SUPABASE_PROJECT_URL'),
        apiKey: configService.get<string>('SUPABASE_SERVICE_ROLE_KEY'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}
