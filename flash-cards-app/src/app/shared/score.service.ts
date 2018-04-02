import { Subject } from 'rxjs/Subject';

export class ScoreService {

  correctSubject = new Subject<number>();
  wrongSubject = new Subject<number>();

  correctScore: number = 0;
  wrongScore: number = 0;

  addCorrectScore() {
    this.correctSubject.next(this.correctScore += 1);
  }

  addWrongScore() {
    this.wrongSubject.next(this.wrongScore += 1);
  }

  resetScore() {
    this.correctSubject.next(this.correctScore = 0);
    this.wrongSubject.next(this.wrongScore = 0);
  }

}
