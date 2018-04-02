import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from '../app.routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FlashcardsService } from '../flashcards/flashcards.service';
import { ScoreService } from '../shared/score.service';

@NgModule ({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    // AppRoutingModule
    RouterModule,
    CommonModule
  ],
  exports: [
    // AppRoutingModule,
    HeaderComponent
  ],
  providers: [FlashcardsService, ScoreService]
})

export class CoreModule {}
