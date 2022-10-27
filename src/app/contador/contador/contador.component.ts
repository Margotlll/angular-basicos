import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template:
  `<h2>{{title}}</h2>
  <h2>la base es: <span>{{base}}</span></h2><button (click)="acumular(base)">-{{base}}</button>
  <h1>{{numero}}</h1><button (click)="acumular(-base)">+{{base}}</button>
  `,
})
export class ContadorComponent{
  public title: string = 'Contador App';
  public numero:number =10;
  public base:number =5;

  acumular(valor:number){this.numero+=valor;}

}
