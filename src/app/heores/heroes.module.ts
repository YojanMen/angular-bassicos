import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { heroescomponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({
    declarations: [
        heroescomponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})

export class heoresmodule {

}