import { ApiProperty } from '@nestjs/swagger';

export class KillDragonDto {
  @ApiProperty()
  dragonId: string;
}
