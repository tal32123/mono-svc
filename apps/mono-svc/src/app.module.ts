import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilfilachumaModule } from '@app/filfilachuma';

@Module({
  imports: [FilfilachumaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
