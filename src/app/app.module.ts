import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import 'src/polyfills';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from 'src/material-module';

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  list: Object[] = [];

  constructor() {

    var listOfLists: string[][];
    listOfLists.push(['1', 'Excelente']);
    listOfLists.push(['2', 'Muito Bom']);
    listOfLists.push(['3', 'Bom']);
    listOfLists.push(['4', 'Regular']);
    listOfLists.push(['5', 'Ruim']);

    this.addItem('a', 'b', listOfLists);
    this.addItem('c', 'd', listOfLists);

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
