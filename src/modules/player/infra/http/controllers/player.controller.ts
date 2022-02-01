import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { JogadorDTO } from 'src/modules/player/dtos/JogadorDTO';
import { PlayerRepository } from '../../typeorm/repositories/PlayerRepository';

import { SaveNewPlayerService } from 'src/modules/player/services/SaveNewPlayer.service';
import { GetPlayerByMatriculaService } from 'src/modules/player/services/GetPlayerByMatricula.service';

@Controller('player')
export class PlayerController {
  private playerRepository: PlayerRepository;

  constructor() {
    this.playerRepository = new PlayerRepository();
  }

  @Post()
  async saveNewPlayer(
    @Body() data: JogadorDTO,
    @Res() response: Response,
  ): Promise<Response> {
    const saveNewPlayerService = new SaveNewPlayerService(
      this.playerRepository,
    );

    const savedPlayer = await saveNewPlayerService.execute(data);

    return response.json(savedPlayer);
  }

  @Get()
  async getByMatricuka(
    @Query('matricula') matricula: string,
    @Res() response: Response,
  ): Promise<Response> {
    const getPlayerByMatriculaService = new GetPlayerByMatriculaService(
      this.playerRepository,
    );
    const foundedUser = await getPlayerByMatriculaService.execute(matricula);

    return response.json(foundedUser);
  }
}
