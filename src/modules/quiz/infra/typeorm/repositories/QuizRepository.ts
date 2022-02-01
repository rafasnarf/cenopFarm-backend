import { getRepository, Repository } from 'typeorm';
import { IQuizRepository } from 'src/modules/quiz/repositories/IQuizRepository';
import { Quiz } from '../entities/Quiz';
import { QuizDTO } from 'src/modules/quiz/dtos/QuizDTO';

export class QuizRepository implements IQuizRepository {
  private ormRepository: Repository<Quiz>;

  constructor() {
    this.ormRepository = getRepository(Quiz);
  }

  public async saveQuestion(data: QuizDTO): Promise<Quiz> {
    const newQuestion = this.ormRepository.create(data);

    await this.ormRepository.save(newQuestion);

    return newQuestion;
  }
}
