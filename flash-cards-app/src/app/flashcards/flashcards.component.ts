import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from './flashcards.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {

  inProgress: boolean;
  decks: {} = this.flashcardsService.decks;

  constructor(private flashcardsService: FlashcardsService) {
  }

  ngOnInit() {
    this.inProgress = false;
    this.flashcardsService.inProgress.subscribe(
      (boolean: boolean) => {
        this.inProgress = boolean;
      }
    )
  }

  onDeckSelect() {
    this.inProgress = true;
  }

}
