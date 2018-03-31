import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../answer.model';

@Component({
  selector: 'app-flashcards-answers',
  templateUrl: './flashcards-answers.component.html',
  styleUrls: ['./flashcards-answers.component.css']
})
export class FlashcardsAnswersComponent implements OnInit {
  @Input() answer: Answer;
  @Input() index: number;
  
  constructor() { }

  ngOnInit() {
  }

}
