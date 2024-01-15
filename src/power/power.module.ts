import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //By default PowerService private to PowerModule, by using exports it'll availiable for other modules in this project
  exports: [PowerService],
})
export class PowerModule {}
