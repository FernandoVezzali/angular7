import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  list: Object[] = [];

  constructor() {

    var multipleChoises: string[][] = [];
    multipleChoises.push(['1', 'Excelente']);
    multipleChoises.push(['2', 'Muito Bom']);
    multipleChoises.push(['3', 'Bom']);
    multipleChoises.push(['4', 'Regular']);
    multipleChoises.push(['5', 'Ruim']);

    var yesNo: string[][] = [];
    yesNo.push(['1', 'Sim']);
    yesNo.push(['2', 'Não']);

    this.addItem('Nossa comunicação:', 'Como qualificaria a comunicação e a informação no website antes do evento?', multipleChoises);
    this.addItem('Localização:', 'Como qualificaria o local do evento?', multipleChoises);
    this.addItem('Credenciamento:', 'Como qualificaria a área de credenciamento?', multipleChoises);
    this.addItem(undefined, 'Voltaria a participar em um evento com esta temática?', yesNo);
  }

  addItem(title: string, subTitle: string, choises: string[][]) {

    this.list.push({
      'title': title,
      'subTitle': subTitle,
      'choises': choises
    });

    /*
    (this._randomIndex(), 0, {
      'letter': this._randomLetter(),
      'number': this._randomNumber(),
      'generation': this.generation,
      'value': ''
    });
    */
  }
}
