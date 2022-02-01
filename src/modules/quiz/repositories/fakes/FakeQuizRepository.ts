import { IQuizRepository } from '../IQuizRepository';
import { Quiz } from '../../infra/typeorm/entities/Quiz';
import { QuizDTO } from '../../dtos/QuizDTO';

export class FakeQuizRepository implements IQuizRepository {
  private perguntas: Quiz[] = [];

  public async saveQuestion(data: QuizDTO): Promise<Quiz> {
    const {
      id,
      idDificuldade,
      ativo,
      pergunta,
      respostaCorreta,
      respostaIncorreta1,
      respostaIncorreta2,
      createdAt,
    } = data;

    const savedQuestion: Quiz = {
      id,
      idDificuldade,
      ativo,
      pergunta,
      respostaCorreta,
      respostaIncorreta1,
      respostaIncorreta2,
      createdAt,
      updatedAt: createdAt,
    };

    this.perguntas.push(savedQuestion);

    return savedQuestion;
  }
}
