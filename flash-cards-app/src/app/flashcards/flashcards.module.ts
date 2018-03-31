import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsRoutingModule } from './flashcards.routing.module';

import { FlashcardsComponent } from './flashcards.component';
import { FlashcardsQuestionsComponent } from './flashcards-questions/flashcards-questions.component';
import { FlashcardsAnswersComponent } from './flashcards-questions/flashcards-answers/flashcards-answers.component';


@NgModule({
  declarations: [
    FlashcardsComponent,
    FlashcardsQuestionsComponent,
    FlashcardsAnswersComponent
  ],
  imports: [FlashcardsRoutingModule, CommonModule],
  exports: [],
  providers: []
})

export class FlashcardsModule {}