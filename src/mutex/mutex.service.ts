import { Injectable } from '@nestjs/common';
import { Mutex } from 'async-mutex';

@Injectable()
export class MutexService<K> {
  private mutexMap = new Map<K, Mutex>();

  private getOrCreateMutex(key: K): Mutex {
    if (!this.mutexMap.has(key)) {
      this.mutexMap.set(key, new Mutex());
    }
    return this.mutexMap.get(key);
  }

  async runLocked<T>(key: K, callback: () => Promise<T>): Promise<T> {
    const mutex = this.getOrCreateMutex(key);
    const release = await mutex.acquire();

    try {
      return await callback();
    } finally {
      release();
    }
  }
}
