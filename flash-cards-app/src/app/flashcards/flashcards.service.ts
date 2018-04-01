import { Question } from './question.model';
import { Answer } from './answer.model';

export class FlashcardsService {
    decks = [
      {
        "id": "1",
        "name": "Deck 1",
        "questions": [
          new Question(
            'Who was the legendary Benedictine monk who invented champagne?',
            [
              new Answer('Dom Perignon'),
              new Answer('Donald Trump'),
              new Answer('Marco Polo'),
              new Answer('Pius XI'),
            ],
            0
          ),
          new Question(
            'Name the largest freshwater lake in the world?',
            [
              new Answer('The Black Sea'),
              new Answer('Lake Superior'),
              new Answer('Lake Ness'),
              new Answer('Lake Michigan'),
            ],
            1
          ),
          new Question(
            'Where would you find the Sea of Tranquility?',
            [
              new Answer('Virginia'),
              new Answer('Ireland'),
              new Answer('South Africa'),
              new Answer('The Moon'),
            ],
            3
          ),
          new Question(
            'What item of clothing was named after its Scottish inventor?',
            [
              new Answer('Kilt'),
              new Answer('Jeans'),
              new Answer('Bagpipe'),
              new Answer('Mackintosh'),
            ],
            3
          ),
          new Question(
            'What is another word for lexicon?',
            [
              new Answer('Book'),
              new Answer('Dictionary'),
              new Answer('Thesaurus'),
              new Answer('Novel'),
            ],
            1
          )
        ]
      }
    ]
  //   questions: Question[] = [
  //
  // ]

  getQuestions(deckId) {
    return this.decks[deckId].questions.slice();
  }

  getQuestion(deckId: number, questionId: number) {
    return this.decks[deckId].questions[questionId];
  }

}
