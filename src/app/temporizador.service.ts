import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TemporizadorService {
  private timer: any;
  public counter: number = 6;

  constructor(private bitcoinService: BitcoinService) {
    this.timer = setInterval(() => {
      this.counter--;
      if (this.counter == 0) {
        console.log('finished');
        clearInterval(this.timer);
        //update(); //
      }
    }, 1000);
  }

  getCounter() {
    return this.counter;
  }

  pauseTimer() {
    clearInterval(this.timer);
  }
}
