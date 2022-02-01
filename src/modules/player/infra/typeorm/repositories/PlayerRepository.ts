import { getRepository, Repository } from 'typeorm';
import { IPlayerRepository } from 'src/modules/player/repositories/IPlayerRepository';
import { Jogador } from '../entities/Jogador';
import { JogadorDTO } from 'src/modules/player/dtos/JogadorDTO';

export class PlayerRepository implements IPlayerRepository {
  private playerRepository: Repository<Jogador>;

  constructor() {
    this.playerRepository = getRepository(Jogador);
  }

  public async savePlayer(data: JogadorDTO): Promise<Jogador> {
    const savedPlayer = this.playerRepository.create(data);

    await this.playerRepository.save(savedPlayer);

    return savedPlayer;
  }

  public async getPlayerByMatricula(matricula: string): Promise<Jogador> {
    const foundedPlayer = await this.playerRepository.findOne({
      where: {
        matricula: matricula,
      },
    });

    return foundedPlayer;
  }
}
