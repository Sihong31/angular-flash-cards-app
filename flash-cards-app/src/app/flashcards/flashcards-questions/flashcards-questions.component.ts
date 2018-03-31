import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from '../flashcards.service';

@Component({
  selector: 'app-flashcards-questions',
  templateUrl: './flashcards-questions.component.html',
  styleUrls: ['./flashcards-questions.component.css']
})
export class FlashcardsQuestionsComponent implements OnInit {
  questions = this.flashcardsService.questions
  firstQuestion = this.questions[0]
  correctAnswer = this.firstQuestion.correctAnswer

  constructor(private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    // console.log(this.firstQuestion.answers, this.correctAnswer)
  }

  onChooseAnswer(index) {
    if (this.correctAnswer == index) {
      console.log("correct")
    } else {
      console.log ("false")
    }
  }

}
