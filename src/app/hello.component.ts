import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Vivian da Cunha - RA: 0050832021024</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
