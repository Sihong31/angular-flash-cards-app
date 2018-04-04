import { Component, OnInit, Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';
import { ActivatedRoute, Params , Router } from '@angular/router';
import { FlashcardsService } from '../flashcards.service';
import { ScoreService } from '../../shared/score.service';

import { Question } from '../question.model';

@Component({
  selector: 'app-flashcards-questions',
  templateUrl: './flashcards-questions.component.html',
  styleUrls: ['./flashcards-questions.component.scss'],
  animations: [
    trigger('cardState', [
      state('normal', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('slide', style({
        transform: 'translateX(1000px)',
        opacity: 0
      })),
      transition('normal => slide', animate(600)),
      transition('slide => normal', animate(0))
    ])
})
export class FlashcardsQuestionsComponent implements OnInit {
  state = 'normal'
  deckId: number
  questionId: number
  questions: Question[]
  currentQuestion: Question
  correctAnswerIndex: number
  isCorrect: boolean = false
  isAnswered: boolean = false
  gameIsActive: boolean = true
  finalScore: number;

  constructor(private flashcardsService: FlashcardsService,
              private scoreService: ScoreService,
              private router: Router,
              private route: ActivatedRoute) { }

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
        this.correctAnswerIndex = this.currentQuestion.correctAnswer
      }
    )
  }

  onChooseAnswer(index) {
    if(this.questionId == this.questions.length - 1) {
      this.gameIsActive = false;
    }
    if (this.correctAnswerIndex == index && !this.isAnswered) {
      this.isCorrect = true;
      this.scoreService.addToCorrectScore();
    }
    else if (this.correctAnswerIndex !==index && !this.isAnswered ){
      this.isCorrect = false;
      this.scoreService.addToWrongScore();
    }
    this.isAnswered = true;

    if(!this.gameIsActive) {
      this.finalScore = this.scoreService.getFinalScore();
    }
  }

  showNextQuestion() {
    if (this.questionId < this.questions.length - 1) {
      this.state = 'slide';
      setTimeout(()=> {
        this.router.navigate([`/flashcards/deck/${this.deckId}/question`,this.questionId+1])
        this.isAnswered = false;
        this.state = 'normal';
      }, 600)

    } else {
      console.log("end of the line")
    }
  }

  onEndGame() {
    this.scoreService.resetScore();
    this.flashcardsService.setProgressFalse();
    this.router.navigate(['/flashcards']);
  }

}
