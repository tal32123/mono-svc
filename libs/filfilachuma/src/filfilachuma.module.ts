import { Module } from '@nestjs/common';
import { FilfilachumaService } from './filfilachuma.service';

@Module({
  providers: [FilfilachumaService],
  exports: [FilfilachumaService],
})
export class FilfilachumaModule {}
