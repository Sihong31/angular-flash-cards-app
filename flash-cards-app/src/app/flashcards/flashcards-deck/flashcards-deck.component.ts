import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-flashcards-deck',
  templateUrl: './flashcards-deck.component.html',
  styleUrls: ['./flashcards-deck.component.scss']
})
export class FlashcardsDeckComponent implements OnInit {
  id: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
      }
    )
  }

}
