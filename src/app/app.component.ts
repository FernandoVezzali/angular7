import { Component } from '@angular/core';
import { Question } from 'src/model/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  list: Question[] = [];

  constructor() {

    const multipleChoises: string[][] = [];
    multipleChoises.push(['1', 'Excelente']);
    multipleChoises.push(['2', 'Muito Bom']);
    multipleChoises.push(['3', 'Bom']);
    multipleChoises.push(['4', 'Regular']);
    multipleChoises.push(['5', 'Ruim']);

    const yesNo: string[][] = [];
    yesNo.push(['1', 'Sim']);
    yesNo.push(['2', 'Não']);

    const q1: Question = { id: 1, title: 'Nossa comunicação:',
    subTitle: 'Como qualificaria a comunicação e a informação no website antes do evento?',
    choises: multipleChoises };

    const q2: Question = { id: 2, title: 'Localização:',
    subTitle: 'Como qualificaria o local do evento?',
    choises: multipleChoises };

    const q3: Question = { id: 3, title: 'Credenciamento:',
    subTitle: 'Como qualificaria a área de credenciamento?',
    choises: multipleChoises };

    const q4: Question = { id: 4, title: 'Nossa comunicação:',
    subTitle: 'Como qualificaria a comunicação e a informação no website antes do evento?',
    choises: yesNo };

    this.list.push(q1, q2, q3, q4);
  }
}
