import { QuizDTO } from '../dtos/QuizDTO';
import { Quiz } from '../infra/typeorm/entities/Quiz';

export interface IQuizRepository {
  saveQuestion(data: QuizDTO): Promise<Quiz>;
}
