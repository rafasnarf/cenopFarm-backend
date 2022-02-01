import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PlayerRepository } from '../infra/typeorm/repositories/PlayerRepository';
import { Jogador } from '../infra/typeorm/entities/Jogador';

import AppError from '../../../shared/errors/AppError';

@Injectable()
export class GetPlayerByMatriculaService {
  constructor(
    @InjectRepository(Jogador)
    private playerRepository: PlayerRepository,
  ) {}

  public async execute(matricula: string): Promise<Jogador | AppError> {
    if (!matricula) {
      return new AppError(
        'Matricula não enviada, impossível realizar a consulta',
      );
    }

    const hasPlayer = await this.playerRepository.getPlayerByMatricula(
      matricula.toUpperCase(),
    );

    if (!hasPlayer) {
      return new AppError('Nenhum jogador encontrado');
    }

    return hasPlayer;
  }
}
