import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PlayerRepository } from '../infra/typeorm/repositories/PlayerRepository';
import { Jogador } from '../infra/typeorm/entities/Jogador';
import { JogadorDTO } from '../dtos/JogadorDTO';
import AppError from '../../../shared/errors/AppError';

@Injectable()
export class SaveNewPlayerService {
  constructor(
    @InjectRepository(Jogador)
    private playerRepository: PlayerRepository,
  ) {}

  public async execute(data: JogadorDTO): Promise<Jogador | AppError> {
    const {
      administrador,
      uorEquipe,
      nomeCargo,
      matriculaGerente,
      codCargo,
      prefixo,
      nome,
      matricula,
    } = data;

    if (
      !uorEquipe ||
      !nomeCargo ||
      !matriculaGerente ||
      !codCargo ||
      !prefixo ||
      !nome ||
      !matricula
    ) {
      return new AppError(
        'Há itens que estão faltando, por favor verifique as informações enviadas',
      );
    }

    const hasPlayer = await this.playerRepository.getPlayerByMatricula(
      matricula.toUpperCase(),
    );

    if (hasPlayer) {
      return new AppError('Este jogador já esta cadastrado no banco de dados');
    }

    const today = new Date();

    const newPlayer: JogadorDTO = {
      matricula: matricula.toUpperCase(),
      matriculaGerente,
      administrador,
      nome,
      nomeCargo,
      codCargo,
      uorEquipe,
      prefixo,
      createdAt: today,
      pontuacao: 0,
    };

    const savedPlayer = await this.playerRepository.savePlayer(newPlayer);

    return savedPlayer;
  }
}
