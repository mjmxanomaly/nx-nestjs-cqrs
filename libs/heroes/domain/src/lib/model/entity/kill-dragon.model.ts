import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class KillDragon {
  @AutoMap()
  @ApiProperty()
  dragonId: string;
}
