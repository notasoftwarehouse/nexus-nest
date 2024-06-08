import { DynamicModule, Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { SupabaseConfig } from './interfaces/supabase-config.interface';

@Module({})
export class SupabaseModule {
  static forRoot(config: SupabaseConfig): DynamicModule {
    return {
      module: SupabaseModule,
      providers: [
        {
          provide: 'SUPABASE_CONFIG',
          useValue: config,
        },
        SupabaseService,
      ],
      exports: [SupabaseService],
    };
  }

  static forRootAsync(options: {
    useFactory: (...args: any[]) => Promise<SupabaseConfig> | SupabaseConfig;
    inject?: any[];
  }): DynamicModule {
    return {
      module: SupabaseModule,
      providers: [
        {
          provide: 'SUPABASE_CONFIG',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        SupabaseService,
      ],
      exports: [SupabaseService],
    };
  }
}
