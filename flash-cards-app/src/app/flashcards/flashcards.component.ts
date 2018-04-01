import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from './flashcards.service';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent implements OnInit {

  decks = this.flashcardsService.decks;

  constructor(private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    console.log(this.decks);

  }

  onDeckSelect() {
  }

}
