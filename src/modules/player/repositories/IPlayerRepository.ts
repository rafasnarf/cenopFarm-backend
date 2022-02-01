import { JogadorDTO } from '../dtos/JogadorDTO';
import { Jogador } from '../infra/typeorm/entities/Jogador';

export interface IPlayerRepository {
  savePlayer(data: JogadorDTO): Promise<Jogador>;
  getPlayerByMatricula(matricula: string): Promise<Jogador>;
}
