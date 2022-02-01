import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import AppError from '../../../shared/errors/AppError';
import { FakeQuizRepository } from '../repositories/fakes/FakeQuizRepository';
import { QuizDTO } from '../dtos/QuizDTO';
import { Quiz } from '../infra/typeorm/entities/Quiz';
import { SaveNewQuestionService } from './SaveNewQuestion.service';

describe('SaveNewQuestionService', () => {
  let saveQuestionService: SaveNewQuestionService;
  let quizRepository: FakeQuizRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaveNewQuestionService,
        {
          provide: getRepositoryToken(Quiz),
          useClass: FakeQuizRepository,
        },
      ],
    }).compile();

    saveQuestionService = await module.resolve(SaveNewQuestionService);
    quizRepository = await module.resolve(getRepositoryToken(Quiz));
  });

  it('deve retornar mensagem de erro por estar faltando a pergunta', async () => {
    const data: QuizDTO = {
      pergunta: '',
      respostaCorreta: 'teste1',
      respostaIncorreta1: 'teste1',
      respostaIncorreta2: 'teste1',
      ativo: true,
      idDificuldade: 'teste1',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar mensagem de erro por estar faltando a resposta correta', async () => {
    const data: QuizDTO = {
      pergunta: 'teste1',
      respostaCorreta: '',
      respostaIncorreta1: 'teste1',
      respostaIncorreta2: 'teste1',
      ativo: true,
      idDificuldade: 'teste1',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar mensagem de erro por estar faltando a resposta incorreta 1', async () => {
    const data: QuizDTO = {
      pergunta: 'teste1',
      respostaCorreta: 'teste1',
      respostaIncorreta1: '',
      respostaIncorreta2: 'teste1',
      ativo: true,
      idDificuldade: 'teste1',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar mensagem de erro por estar faltando a resposta incorreta 2', async () => {
    const data: QuizDTO = {
      pergunta: 'teste1',
      respostaCorreta: 'teste1',
      respostaIncorreta1: 'teste1',
      respostaIncorreta2: '',
      ativo: true,
      idDificuldade: 'teste1',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve retornar mensagem de erro por estar faltando a idDificuldade', async () => {
    const data: QuizDTO = {
      pergunta: 'teste1',
      respostaCorreta: 'teste1',
      respostaIncorreta1: 'teste1',
      respostaIncorreta2: 'teste1',
      ativo: true,
      idDificuldade: '',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toBeInstanceOf(AppError);
  });

  it('deve a nova pergunta criada', async () => {
    const data: QuizDTO = {
      pergunta: 'teste1',
      respostaCorreta: 'teste1',
      respostaIncorreta1: 'teste1',
      respostaIncorreta2: 'teste1',
      ativo: true,
      idDificuldade: 'teste1',
    };

    const result = await saveQuestionService.execute(data);

    expect(result).toHaveProperty('id');
  });
});
