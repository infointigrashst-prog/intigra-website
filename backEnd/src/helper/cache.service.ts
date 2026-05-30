import { Injectable } from '@nestjs/common';
import NodeCache from 'node-cache';

@Injectable()
export class CacheService {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache(); // Create an instance of NodeCache
  }

  setCache(key: string, data: any): void {
    this.cache.set(key, data);
  }

  getCache<T>(key: string): T | undefined {
    return this.cache.get<T>(key);
  }
}
