import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { ISupabaseConfig } from './interfaces/supabase-config.interface';
import { IStorageClient } from 'src/storage/interfaces/storage-client.interface';

@Injectable()
export class SupabaseService implements IStorageClient {
  private readonly client: SupabaseClient;

  constructor(@Inject('SUPABASE_CONFIG') private config: ISupabaseConfig) {
    this.client = createClient(this.config.url, this.config.apiKey);
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
