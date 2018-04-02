import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../../shared/score.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  correctScore: number = 0;
  wrongScore: number = 0;

  constructor(private scoreService: ScoreService) {
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

}
