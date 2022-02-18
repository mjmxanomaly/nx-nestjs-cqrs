import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import type { Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { KillDragon, KillDragonDto } from 'nestjs-playground/heroes/domain';

@Injectable()
export class KillDragonProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  mapProfile() {
    return (mapper: Mapper) => {
      mapper.createMap(KillDragon, KillDragonDto);
    };
  }
}
