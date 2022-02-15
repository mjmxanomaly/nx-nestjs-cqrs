import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { HeroesDomainModule } from 'nestjs-playground/heroes/domain';

import { HeroesService } from './service/heroes.service';
import { QueryHandlers } from './query';
import { CommandHandlers } from './command';
import { EventHandlers } from './event';
import { Sagas } from './saga';

@Module({
  imports: [CqrsModule, HeroesDomainModule],
  providers: [
    HeroesService,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
    ...Sagas,
  ],
})
export class HeroesApplicationModule {}
