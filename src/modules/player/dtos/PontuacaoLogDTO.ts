import { Quiz } from 'src/modules/quiz/infra/typeorm/entities/Quiz';
import { Jogador } from '../infra/typeorm/entities/Jogador';

export class PontuacaoLogDTO {
  idMatricula: Jogador;
  idPergunta: Quiz;
  pontuacaoAnterior: number;
  pontuacaoAtual: number;
  acertou: boolean;
  createdAt?: Date;
}
