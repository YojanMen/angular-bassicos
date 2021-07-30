import {Component} from '@angular/core';


@Component ({
    selector :'app-contador',
    template: ` 

    <h1>{{ title }}</h1> 

<h1>la base es: <strong> {{base}} </strong></h1>



<button (click)="acumular((base))"> {{base}} </button>

<span>{{ numero }}</span>

<button (click)="acumular((-base))"> {{base}} </button>   
    `
})
export class contadorcomponent{
    title = 'contador app';
  base: number= 5;
  numero: number =0;

  acumular ( valor: number ){
    this.numero+= valor;
  
  }

}