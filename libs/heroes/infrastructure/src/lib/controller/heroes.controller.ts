import { MapPipe } from '@automapper/nestjs';
import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { KillDragon, KillDragonDto } from 'nestjs-playground/heroes/domain';

import { HeroesFacade } from '../service/heroes.facade';

@Controller('hero')
export class HeroesController {
  private readonly logger = new Logger(HeroesController.name);

  constructor(private readonly heroes: HeroesFacade) {}

  @Post(':id/kill')
  async killDragon(
    @Param('id') id: string,
    @Body(MapPipe(KillDragonDto, KillDragon)) dto: KillDragonDto
  ) {
    return this.heroes.commandKillDragon(id, dto.dragonId);
  }

  @Get()
  async findAll() {
    return this.heroes.getAllHeroes();
  }
}
