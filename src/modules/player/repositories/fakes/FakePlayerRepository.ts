import { Jogador } from '../../infra/typeorm/entities/Jogador';
import { JogadorDTO } from '../../dtos/JogadorDTO';
import { IPlayerRepository } from '../IPlayerRepository';

export class FakePlayerRepository implements IPlayerRepository {
  private jogadores: Jogador[] = [];

  public async savePlayer(data: JogadorDTO): Promise<Jogador> {
    const {
      matricula,
      administrador,
      createdAt,
      codCargo,
      matriculaGerente,
      uorEquipe,
      prefixo,
      nome,
      nomeCargo,
    } = data;

    const savedPlayer: Jogador = {
      matricula,
      nome,
      prefixo,
      administrador,
      codCargo,
      createdAt,
      matriculaGerente,
      nomeCargo,
      pontuacao: 0,
      uorEquipe,
      updatedAt: createdAt,
    };

    this.jogadores.push(savedPlayer);

    return savedPlayer;
  }

  public async getPlayerByMatricula(matricula: string): Promise<Jogador> {
    const foundedPlayer = this.jogadores.find(
      (player) => player.matricula === matricula,
    );

    return foundedPlayer;
  }
}
