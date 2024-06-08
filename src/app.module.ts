import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MutexModule } from './mutex/mutex.module';
import { SharpModule } from './sharp/sharp.module';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MutexModule,
    SharpModule,
    DemoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
