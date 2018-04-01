import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { FlashcardsService } from '../flashcards.service';

import { Question } from '../question.model';

@Component({
  selector: 'app-flashcards-questions',
  templateUrl: './flashcards-questions.component.html',
  styleUrls: ['./flashcards-questions.component.css']
})
export class FlashcardsQuestionsComponent implements OnInit {
  deckId: number
  questionId: number
  questions: Question[]
  currentQuestion: Question
  correctAnswer: any
  isCorrect: boolean = false
  isAnswered: boolean = false
  gameIsActive: boolean = true

  constructor(private flashcardsService: FlashcardsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        this.deckId = +params['id'];
        this.questions = this.flashcardsService.getQuestions(this.deckId);
      }
     )
    this.route.params.subscribe(
      (params: Params) => {
        this.questionId = +params['id']
        this.currentQuestion = this.flashcardsService.getQuestion(this.deckId, this.questionId);
        this.correctAnswer = this.currentQuestion.correctAnswer
      }
    )
  }

  onChooseAnswer(index) {
    this.isAnswered = true;
    if(this.questionId == this.questions.length - 1) {
      this.gameIsActive = false;
    }

    if (this.correctAnswer == index) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }

  }

  showNextQuestion() {
    if (this.questionId < this.questions.length - 1) {
      this.isAnswered = false;
      this.router.navigate([`/flashcards/deck/${this.deckId}/question`,this.questionId+1])
    } else {
      console.log("end of the line")
    }
  }

  onEndGame() {
    this.router.navigate(['/flashcards'])
  }

}
