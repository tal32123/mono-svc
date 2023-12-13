import { Controller, Get } from '@nestjs/common';
import { Svc2Service } from './svc2.service';
import {  FilfilachumaService } from '@app/filfilachuma';

@Controller()
export class Svc2Controller {
  constructor(private readonly svc2Service: Svc2Service, private readonly fSvc: FilfilachumaService) {}

  @Get()
  getHello(): string {
    var filfil = this.fSvc.getFilfil();
    return filfil;
  }
}
