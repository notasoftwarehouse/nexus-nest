import { DynamicModule, Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { IPrismaConfig } from './interfaces/prisma-config.interface';

@Global()
@Module({})
export class PrismaModule {
  static forRoot(config: IPrismaConfig): DynamicModule {
    return {
      module: PrismaModule,
      providers: [
        {
          provide: 'PRISMA_CONFIG',
          useValue: config,
        },
        PrismaService,
      ],
      exports: [PrismaService],
    };
  }

  static forRootAsync(options: {
    useFactory: (...args: any[]) => Promise<IPrismaConfig> | IPrismaConfig;
    inject?: any[];
  }): DynamicModule {
    return {
      module: PrismaModule,
      providers: [
        {
          provide: 'PRISMA_CONFIG',
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
        PrismaService,
      ],
      exports: [PrismaService],
    };
  }
}
