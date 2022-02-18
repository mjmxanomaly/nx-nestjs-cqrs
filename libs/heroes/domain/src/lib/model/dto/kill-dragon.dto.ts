import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';

export class KillDragonDto {
  @AutoMap()
  @ApiProperty()
  dragonId: string;
}
