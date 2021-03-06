import { Subject } from 'rxjs/Subject';

export class ScoreService {

  correctSubject = new Subject<number>();
  wrongSubject = new Subject<number>();

  correctScore: number = 0;
  wrongScore: number = 0;

  addToCorrectScore() {
    this.correctSubject.next(this.correctScore += 1);
  }

  addToWrongScore() {
    this.wrongSubject.next(this.wrongScore += 1);
  }

  getFinalScore() {
    return Math.floor(this.correctScore/(this.correctScore + this.wrongScore) * 100);
  }

  resetScore() {
    this.correctSubject.next(this.correctScore = 0);
    this.wrongSubject.next(this.wrongScore = 0);
  }
}
