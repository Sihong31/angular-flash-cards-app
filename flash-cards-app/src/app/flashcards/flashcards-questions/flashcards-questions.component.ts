import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';

@Component({
  selector: 'app-flashcards-questions',
  templateUrl: './flashcards-questions.component.html',
  styleUrls: ['./flashcards-questions.component.css']
})
export class FlashcardsQuestionsComponent implements OnInit {

  constructor(private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    console.log(this.flashcardsService.questions)
  }

}
