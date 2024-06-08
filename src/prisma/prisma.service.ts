import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/client';
import { IPrismaConfig } from './interfaces/prisma-config.interface';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(@Inject('PRISMA_CONFIG') private readonly config: IPrismaConfig) {
    super({
      datasources: {
        db: {
          url: config.databaseUrl,
        },
      },
    });
  }
}
