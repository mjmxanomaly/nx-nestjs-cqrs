import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { HeroesApplicationModule } from 'nestjs-playground/heroes/application';

import { HeroesFacade } from './service/heroes.facade';
import { HeroesController } from './controller/heroes.controller';
import { KillDragonProfile } from './profile/kill-dragon.profile';

@Module({
  controllers: [HeroesController],
  imports: [CqrsModule, HeroesApplicationModule],
  providers: [KillDragonProfile, HeroesFacade],
  exports: [HeroesFacade],
})
export class HeroesInfrastructureModule {}
