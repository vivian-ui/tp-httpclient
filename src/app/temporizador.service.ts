import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TemporizadorService {
  private timer: any;
  public counter: number = 60;

  constructor(private bitcoinService: BitcoinService) {
    this.timer = setInterval(() => {
      this.counter--;
      if (this.counter == 0) {
        this.counter = 60; //reinicia o contador
        this.bitcoinService.update(); //chama o update do bitcoin.service.ts
      }
    }, 1000);
  }

  getCounter() {
    return this.counter;
  }
}
