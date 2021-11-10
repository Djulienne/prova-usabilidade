import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prova-usabilidade';

  addBotao: string = " ";
  addResult!: number;

  calcular() {
    var x = (parseInt(this.addBotao, 2));
    this.addResult = x;
  }

}
