import { Answer } from './answer.model';

export class Question {
  constructor(public question: string, public answers: Answer[], public correctAnswer: number) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}
