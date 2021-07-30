import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent    {

  heroes: string[]=['thor','spiderman', 'goku', 'yomero'];
  borradorheroe: string='';
  //  let heroemas: string;

  borrarheroe(){
   this.borradorheroe = this.heroes.shift() || '';
    // this.borradorheroe=borradorheroe;
  }

  

  }




