import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { SupabaseService } from 'src/supabase/supabase.service';

@Module({
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
