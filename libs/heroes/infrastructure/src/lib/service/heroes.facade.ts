import { Injectable, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  GetHeroesQuery,
  KillDragonCommand,
} from 'nestjs-playground/heroes/application';

@Injectable()
export class HeroesFacade {
  private readonly logger = new Logger(HeroesFacade.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async commandKillDragon(id: string, dragonId: string) {
    return this.commandBus.execute(new KillDragonCommand(id, dragonId));
  }

  async getAllHeroes() {
    return this.queryBus.execute(new GetHeroesQuery());
  }
}
