import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { pojos } from '@automapper/pojos';
import { CamelCaseNamingConvention } from '@automapper/core';
import { HeroesInfrastructureModule } from 'nestjs-playground/heroes/infrastructure';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'demo', pluginInitializer: pojos }],
      globalNamingConventions: {
        source: new CamelCaseNamingConvention(),
        destination: new CamelCaseNamingConvention(),
      },
      singular: true,
    }),
    HeroesInfrastructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
