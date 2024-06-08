import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { ConfigService } from '@nestjs/config';
import { SupabaseService } from 'src/supabase/supabase.service';

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
  providers: [
    {
      provide: 'STORAGE_CLIENT',
      useFactory: (supabaseService: SupabaseService) => supabaseService,
      inject: [SupabaseService],
    },
    StorageService,
  ],
  exports: [StorageService],
})
export class StorageModule {}
