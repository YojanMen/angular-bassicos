import { Component } from "@angular/core";



@Component({
    selector : 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class heroescomponent{
  nombre:string= 'ironman';
  edad: number= 44;  

  get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
  }

    obtenernombre(): string{
        return `${this.nombre}-${this.edad}`;
        // return `${this.nombre}-${this.edad}`;

    }

    cambiarNombre(): void {
        this.nombre= 'spiderman'
    }

    cambiarEdad():void{
        this.edad= 22
    }
    

}