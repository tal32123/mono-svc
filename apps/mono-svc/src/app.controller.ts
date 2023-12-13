import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { FilfilachumaService } from '@app/filfilachuma';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly filfilSvc: FilfilachumaService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('filfil')
  getFilfilachuma(): string {
    return this.filfilSvc.getFilfil();
  }
}
