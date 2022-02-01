import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './infra/typeorm/entities/Quiz';

//import Controller
import { QuizController } from './infra/http/controllers/quiz.controller';

//Import services
import { SaveNewQuestionService } from './services/saveNewQuestion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [SaveNewQuestionService],
  controllers: [QuizController],
  exports: [TypeOrmModule],
})
export class QuizModule {}
