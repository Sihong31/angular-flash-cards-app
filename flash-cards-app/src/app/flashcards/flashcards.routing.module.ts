import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsComponent } from './flashcards.component';
import { FlashcardsQuestionsComponent } from './flashcards-questions/flashcards-questions.component';
import { FlashcardsDeckComponent} from './flashcards-deck/flashcards-deck.component';

const flashcardsRoutes: Routes = [
  { path: 'flashcards',
    component: FlashcardsComponent,
    children: [{
      path: 'deck/:id',
      component: FlashcardsDeckComponent  ,
      children: [{
        path: 'question/:id',
        component: FlashcardsQuestionsComponent
      }]
    }]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(flashcardsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class FlashcardsRoutingModule {}
