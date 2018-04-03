import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FlashcardsService } from './flashcards.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit, OnDestroy {

  inProgress: boolean;
  decks: {} = this.flashcardsService.decks;
  decksLength = this.decks.length;

  constructor(
    private flashcardsService: FlashcardsService,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
    //check state on page refresh
    if (this.router.url === "/flashcards") {
      this.inProgress = false;
    }
    else if (this.router.url.includes("flashcards/deck/")) {
      this.inProgress = true;
    }
    //check state on navigating browser
    this.location.subscribe(
      (status) => {
        if(status.pop === true && status.url === "/flashcards") {
          this.inProgress = false;
        }
      }
    )
    //subscribe to state changes when starting a deck
    this.flashcardsService.inProgress.subscribe(
      (boolean: boolean) => {
        this.inProgress = boolean;
      }
    )
  }

  onDeckSelect() {
    this.inProgress = true;
  }

  onChooseRandomDeck() {
    const randomDeckIndex = Math.floor(Math.random() * Math.floor(this.decksLength))
    this.flashcardsService.setProgressTrue();
    this.router.navigate([`/flashcards/deck/${randomDeckIndex}/question/0`]);
  }

  ngOnDestroy() {
    this.flashcardsService.inProgress.unsubscribe();
    this.location.unsubscribe();
  }
}
