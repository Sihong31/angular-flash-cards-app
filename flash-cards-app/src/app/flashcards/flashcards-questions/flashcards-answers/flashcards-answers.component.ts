import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Answer } from '../../answer.model';
import { FlashcardsService } from '../../flashcards.service';

@Component({
  selector: 'app-flashcards-answers',
  templateUrl: './flashcards-answers.component.html',
  styleUrls: ['./flashcards-answers.component.scss']
})
export class FlashcardsAnswersComponent implements OnInit {
  @Input() answer: Answer;
  @Input() index: number;
  @ViewChild('ref') answerRef: ElementRef;
  questionId: number;
  deckId: number;
  isAnswered: boolean = false;
  answerCheck: boolean;
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;

  constructor(private renderer2: Renderer2, private flashcardsService: FlashcardsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        this.deckId = +params['id'];
      }
    )
    this.route.params.subscribe(
      (params: Params) => {
        this.questionId = +params['id'];
      }
    )
    this.flashcardsService.isAnswered.subscribe(
      (boolean: boolean) => {
        this.isAnswered = boolean
      }
    )

    )
    this.answerCheck = this.flashcardsService.decks[this.deckId].questions[this.questionId].correctAnswer == this.index;
  }

  onAnswer() {
    if (!this.isAnswered) {
      this.renderer2.setAttribute(this.answerRef.nativeElement, "checked", "true");
      this.flashcardsService.setAnsweredToTrue();
      if (this.answerCheck) {
        this.isCorrectAnswer = true;
      } else {
        this.isWrongAnswer = true;
      }
    }
  }

}
