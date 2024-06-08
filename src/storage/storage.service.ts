import { Inject, Injectable } from '@nestjs/common';
import { IStorageClient } from './interfaces/storage-client.interface';

@Injectable()
export class StorageService {
  private readonly storageClient: IStorageClient;

  constructor(@Inject('STORAGE_CLIENT') storageClient: IStorageClient) {
    this.storageClient = storageClient;
  }
}
