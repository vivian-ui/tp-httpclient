import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TemporizadorService } from './temporizador.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'BitCoin$';

  constructor(
    public bitcoinService: BitcoinService,
    public timer: TemporizadorService
  ) {}

  ngOnInit() {
    this.update();
  }

  getCurrentPrice() {
    return this.bitcoinService.currentPrice;
  }

  update() {
    this.bitcoinService.update();
  }
}
