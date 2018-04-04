import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardsRoutingModule } from './flashcards.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlashcardsComponent } from './flashcards.component';
import { FlashcardsQuestionsComponent } from './flashcards-questions/flashcards-questions.component';
import { FlashcardsAnswersComponent } from './flashcards-questions/flashcards-answers/flashcards-answers.component';
import { FlashcardsDeckComponent } from './flashcards-deck/flashcards-deck.component';


@NgModule({
  declarations: [
    FlashcardsComponent,
    FlashcardsQuestionsComponent,
    FlashcardsAnswersComponent,
    FlashcardsDeckComponent
  ],
  imports: [FlashcardsRoutingModule, CommonModule, BrowserAnimationsModule],
  exports: [],
  providers: []
})

export class FlashcardsModule {}
