import { Question } from './question.model';
import { Answer } from './answer.model';

export class FlashcardsService {
    questions: Question[] = [
    new Question(
      'This is a test question',
      [
        new Answer('question 1'),
        new Answer('question 2'),
        new Answer('question 3'),
        new Answer('question 4'),
      ],
      0
    ),
    new Question(
      'This is test question number 2',
      [
        new Answer('question 1'),
        new Answer('question 2'),
        new Answer('question 3'),
        new Answer('question 4'),
      ],
      1
    )
  ]

}
