import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import typeormConfig = require('./config/typeormConfig');

//Import Modules
import { QuizModule } from './modules/quiz/quiz.module';
import { PlayerModule } from './modules/player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeormConfig[0]),
    QuizModule,
    PlayerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
