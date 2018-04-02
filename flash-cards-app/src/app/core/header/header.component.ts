import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../shared/score.service';
import { FlashcardsService } from '../../flashcards/flashcards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  correctScore: number = 0;
  wrongScore: number = 0;

  constructor(private scoreService: ScoreService, private flashcardsService: FlashcardsService, private router: Router) {
    this.scoreService.correctSubject.subscribe(
      (correctScore: number) => {
        this.correctScore = correctScore
      }
    )
    this.scoreService.wrongSubject.subscribe(
      (wrongScore: number) => {
        this.wrongScore = wrongScore
      }
    )
  }

  ngOnInit() {

  }

  onBrandClick() {
    this.flashcardsService.setProgressFalse();
    this.scoreService.resetScore();
    this.router.navigate(['/flashcards']);
  }

}
