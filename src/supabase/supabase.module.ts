import { DynamicModule, Global, Module } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { ISupabaseConfig } from './interfaces/supabase-config.interface';

@Global()
@Module({})
export class SupabaseModule {
  static forRoot(config: ISupabaseConfig): DynamicModule {
    return {
      module: SupabaseModule,
      providers: [
        {
          provide: 'SUPABASE_CONFIG',
          useValue: config,
        },
        {
          provide: 'STORAGE_CLIENT',
          useClass: SupabaseService,
        },
        SupabaseService,
      ],
      exports: [SupabaseService, 'STORAGE_CLIENT'],
    };
  }

  static forRootAsync(options: {
    useFactory: (...args: any[]) => Promise<ISupabaseConfig> | ISupabaseConfig;
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
        {
          provide: 'STORAGE_CLIENT',
          useClass: SupabaseService,
        },
        SupabaseService,
      ],
      exports: [SupabaseService, 'STORAGE_CLIENT'],
    };
  }
}
