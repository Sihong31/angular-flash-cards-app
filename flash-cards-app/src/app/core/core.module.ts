import { NgModule } from '@angular/core';
// import { AppRoutingModule } from '../app.routing.module';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FlashcardsService } from '../flashcards/flashcards.service';

@NgModule ({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    // AppRoutingModule
  ],
  exports: [
    // AppRoutingModule,
    HeaderComponent
  ],
  providers: [FlashcardsService]
})

export class CoreModule {}
