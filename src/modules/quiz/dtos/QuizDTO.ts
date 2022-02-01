import { DificuldadePontuacao } from '../infra/typeorm/entities/DificuldadePontuacao';

export class QuizDTO {
  id?: string;
  pergunta: string;
  respostaCorreta: string;
  respostaIncorreta1: string;
  respostaIncorreta2: string;
  idDificuldade: string;
  ativo: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
