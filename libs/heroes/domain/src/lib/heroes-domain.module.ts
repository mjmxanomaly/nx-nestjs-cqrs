import { Module } from '@nestjs/common';

// import { ENTITIES } from './model/entity';
import { REPOSITORIES } from './repository';

@Module({
  controllers: [],
  imports: [],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES],
})
export class HeroesDomainModule {}
