import { Injectable } from '@nestjs/common';
import { Hero } from '../model/entity/hero.model';
import { userHero } from './fixtures/user';

@Injectable()
export class HeroRepository {
  async findOneById(id: number): Promise<Hero> {
    return userHero;
  }

  async findAll(): Promise<Hero[]> {
    return [userHero];
  }
}
