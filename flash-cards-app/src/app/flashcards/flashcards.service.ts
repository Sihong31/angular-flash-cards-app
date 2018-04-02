import { Question } from './question.model';
import { Answer } from './answer.model';
import { Subject } from 'rxjs/Subject';

export class FlashcardsService {
    inProgress = new Subject<boolean>();
    decks = [
      {
        "name": "General",
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
          ),
          new Question(
            'Who invented the rabies vaccination?',
            [
              new Answer('Isaac Newton'),
              new Answer('Mike Pasteur'),
              new Answer('John Rabi'),
              new Answer('Louis Pasteur'),
            ],
            3
          ),
          new Question(
            'What is the capital city of Spain?',
            [
              new Answer('Madrid'),
              new Answer('Barcelona'),
              new Answer('Chile'),
              new Answer('Aragon'),
            ],
            0
          ),
          new Question(
            'Which kind of bulbs were once exchanged as a form of currency?',
            [
              new Answer('Light'),
              new Answer('Rose'),
              new Answer('Tulip'),
              new Answer('Violet'),
            ],
            2
          ),
          new Question(
            'How many valves does a trumpet have?',
            [
              new Answer('One'),
              new Answer('Zero'),
              new Answer('Six'),
              new Answer('Three'),
            ],
            3
          ),
          new Question(
            'When did the Cold War end?',
            [
              new Answer('2001'),
              new Answer('1989'),
              new Answer('1945'),
              new Answer('1865'),
            ],
            1
          )
        ]
      },
      {
        "name": "Animals",
        "questions": [
          new Question(
            'What is the collective name for a group of lions?',
            [
              new Answer('A Group'),
              new Answer('A Pride'),
              new Answer('A Pack'),
              new Answer('A Band'),
            ],
            1
          ),
          new Question(
            'What kind of animal is a Komodo dragon?',
            [
              new Answer('Lizard'),
              new Answer('Dragon'),
              new Answer('Dinosaur'),
              new Answer('Bird'),
            ],
            0
          ),
          new Question(
            'True or false - the python is a poisonous snake?',
            [
              new Answer('True'),
              new Answer('False')
            ],
            1
          ),
          new Question(
            'What kind of creature is a Portuguese man of war?',
            [
              new Answer('Hawk'),
              new Answer('Jaguar'),
              new Answer('Dog'),
              new Answer('Jellyfish'),
            ],
            3
          ),
          new Question(
            'How many arms do most starfish have?',
            [
              new Answer('5'),
              new Answer('2'),
              new Answer('4'),
              new Answer('0'),
            ],
            0
          ),
          new Question(
            'What is a cabbage white?',
            [
              new Answer('Bird'),
              new Answer('Spider'),
              new Answer('Butterfly'),
              new Answer('Snake'),
            ],
            2
          ),
          new Question(
            'Which is the largest mammal in the world?',
            [
              new Answer('Loch Ness Monster'),
              new Answer('Panda'),
              new Answer('Elephant'),
              new Answer('Blue Whale'),
            ],
            3
          ),
          new Question(
            'Which is the largest living bird?',
            [
              new Answer('Penguin'),
              new Answer('Flamingo'),
              new Answer('Great Bald Eagle'),
              new Answer('Ostrich'),
            ],
            3
          ),
          new Question(
            '"Murder" is the collective noun for a group of which bird?',
            [
              new Answer('Hawks'),
              new Answer('Geese'),
              new Answer('Crows'),
              new Answer('Ravens'),
            ],
            2
          ),
          new Question(
            "Which large mammal's tail is so strong it can stand on it and lift its hind legs off the ground?",
            [
              new Answer('Kangaroo'),
              new Answer('Monkey'),
              new Answer('Chimpanzee'),
              new Answer('Platypus'),
            ],
            0
          )
        ]
      },
      {
        "name": "Travel",
        "questions": [
          new Question(
            'The Straight of Gibraltar connects the Atlantic Ocean with which Sea?',
            [
              new Answer('Black'),
              new Answer('Arctic'),
              new Answer('Mediterranean'),
              new Answer('South China'),
            ],
            2
          ),
          new Question(
            'Which country is also called the Hellenic Republic?',
            [
              new Answer('Greece'),
              new Answer('Italy'),
              new Answer('Spain'),
              new Answer('Macedonia'),
            ],
            0
          ),
          new Question(
            'Okinawa is a volcano in which country?',
            [
              new Answer('China'),
              new Answer('Vietnam'),
              new Answer('Korea'),
              new Answer('Japan'),
            ],
            3
          ),
          new Question(
            'What was Ho Chi Minh City before it was called Ho Chi Minh City?',
            [
              new Answer('Vietnam City'),
              new Answer('Saigon'),
              new Answer('Seoul'),
              new Answer('Hong Kong'),
            ],
            1
          ),
          new Question(
            'What country has more volcanoes than any other?',
            [
              new Answer('New Zealand'),
              new Answer('Iceland'),
              new Answer('Indonesia'),
              new Answer('Switzerland'),
            ],
            2
          ),
          new Question(
            'What name is given to the popular holiday area between Marseille and La Spezia?',
            [
              new Answer('The Rio Grande'),
              new Answer('Carnivale'),
              new Answer('South by Southwest'),
              new Answer('Riviera'),
            ],
            3
          ),
          new Question(
            'How tall is the Eiffel Tower?',
            [
              new Answer('873 feet'),
              new Answer('984 feet'),
              new Answer('1027 feet'),
              new Answer('1125 feet'),
            ],
            1
          ),
          new Question(
            'What was St. Petersburg called for most of the 20th century?',
            [
              new Answer('Stalingrad'),
              new Answer('Moscow'),
              new Answer('Leningrad'),
              new Answer('Minsk'),
            ],
            2
          ),
          new Question(
            'What is the largest country in South America?',
            [
              new Answer('Chile'),
              new Answer('Brazil'),
              new Answer('Argentina'),
              new Answer('Panama'),
            ],
            1
          ),
          new Question(
            'What island in San Francisco Bay was the site of an almost escape-proof prison?',
            [
              new Answer('Hawaii'),
              new Answer('Borneo'),
              new Answer('Sardinia'),
              new Answer('Alcatraz'),
            ],
            3
          )
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

  setProgressTrue() {
    this.inProgress.next(true);
  }
  setProgressFalse() {
    this.inProgress.next(false);
  }

}
