import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { SupabaseConfig } from './interfaces/supabase-config.interface';

@Injectable()
export class SupabaseService {
  private readonly client: SupabaseClient;

  constructor(@Inject('SUPABASE_CONFIG') private config: SupabaseConfig) {
    this.client = createClient(this.config.url, this.config.apiKey);
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
