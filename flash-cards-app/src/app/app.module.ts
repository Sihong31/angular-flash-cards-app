import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { FlashcardsModule } from './flashcards/flashcards.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FlashcardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
