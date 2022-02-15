import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { KillDragonDto } from 'nestjs-playground/heroes/domain';

import { HeroesFacade } from '../service/heroes.facade';

@Controller('hero')
export class HeroesController {
  private readonly logger = new Logger(HeroesController.name);

  constructor(private readonly heroes: HeroesFacade) {}

  @Post(':id/kill')
  async killDragon(
    @Param('id') id: string,
    @Body() { dragonId }: KillDragonDto
  ) {
    return this.heroes.commandKillDragon(id, dragonId);
  }

  @Get()
  async findAll() {
    return this.heroes.getAllHeroes();
  }
}
