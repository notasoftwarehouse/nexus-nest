import { Injectable } from '@nestjs/common';
import { IStorageClient } from './interfaces/storage-client.interface';

@Injectable()
export class StorageService {
  private readonly storageClient: IStorageClient;

  constructor(storageClient: IStorageClient) {
    this.storageClient = storageClient;
    console.log(this.storageClient);
  }
}
