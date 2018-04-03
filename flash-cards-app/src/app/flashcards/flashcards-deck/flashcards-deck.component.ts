import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FlashcardsService } from '../flashcards.service';

@Component({
  selector: 'app-flashcards-deck',
  templateUrl: './flashcards-deck.component.html',
  styleUrls: ['./flashcards-deck.component.scss']
})
export class FlashcardsDeckComponent implements OnInit {
  currentDeck: {}
  id: number

  constructor(private route: ActivatedRoute, private flashcardsService: FlashcardsService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.currentDeck = this.flashcardsService.decks[this.id]
      }
    )
  }

}
