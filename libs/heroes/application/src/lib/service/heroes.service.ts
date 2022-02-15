import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HeroesService {
  private readonly logger = new Logger(HeroesService.name);
}
