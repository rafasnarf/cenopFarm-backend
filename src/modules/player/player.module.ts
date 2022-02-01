import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//Import entities
import { Jogador } from './infra/typeorm/entities/Jogador';

//Import Controller
import { PlayerController } from './infra/http/controllers/player.controller';

//Import services
import { SaveNewPlayerService } from './services/SaveNewPlayer.service';
import { GetPlayerByMatriculaService } from './services/GetPlayerByMatricula.service';

@Module({
  imports: [TypeOrmModule.forFeature([Jogador])],
  providers: [SaveNewPlayerService, GetPlayerByMatriculaService],
  controllers: [PlayerController],
  exports: [TypeOrmModule],
})
export class PlayerModule {}
