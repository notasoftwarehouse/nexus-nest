import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class StorageService {
  private readonly supabaseClient = this.supabaseService.getClient();

  constructor(private readonly supabaseService: SupabaseService) {}
}
