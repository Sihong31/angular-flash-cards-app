import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlashcardsComponent } from './flashcards.component';

const flashcardsRoutes: Routes = [
  { path: 'flashcards', component: FlashcardsComponent}
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
