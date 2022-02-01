import { Body, Controller, Post, Res } from '@nestjs/common';

import { Response } from 'express';

import { QuizDTO } from 'src/modules/quiz/dtos/QuizDTO';
import { QuizRepository } from '../../typeorm/repositories/QuizRepository';
import { SaveNewQuestionService } from 'src/modules/quiz/services/saveNewQuestion.service';

@Controller('quiz')
export class QuizController {
  private quizRepository: QuizRepository;

  constructor() {
    this.quizRepository = new QuizRepository();
  }

  @Post()
  async saveNewQuestion(
    @Body() data: QuizDTO,
    @Res() response: Response,
  ): Promise<Response> {
    const saveNewQuestionService = new SaveNewQuestionService(
      this.quizRepository,
    );

    const savedQuestion = await saveNewQuestionService.execute(data);

    return response.json(savedQuestion);
  }
}
