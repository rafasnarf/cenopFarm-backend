import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { QuizRepository } from '../infra/typeorm/repositories/QuizRepository';
import { QuizDTO } from '../dtos/QuizDTO';
import { Quiz } from '../infra/typeorm/entities/Quiz';
import AppError from '../../../shared/errors/AppError';
import { v4 as uuid } from 'uuid';

@Injectable()
export class SaveNewQuestionService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: QuizRepository,
  ) {}

  public async execute(data: QuizDTO): Promise<Quiz | AppError> {
    const {
      pergunta,
      respostaCorreta,
      respostaIncorreta1,
      respostaIncorreta2,
      ativo,
      idDificuldade,
    } = data;

    if (
      !pergunta ||
      !respostaCorreta ||
      !respostaIncorreta1 ||
      !respostaIncorreta2 ||
      !idDificuldade
    ) {
      return new AppError('Há itens que estão faltando, favor verificar');
    }

    const today = new Date();
    const savedQuestion = await this.quizRepository.saveQuestion({
      id: uuid(),
      pergunta,
      respostaCorreta,
      respostaIncorreta1,
      respostaIncorreta2,
      ativo,
      idDificuldade,
      createdAt: today,
    });

    return savedQuestion;
  }
}
