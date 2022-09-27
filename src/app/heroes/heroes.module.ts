import { NgModule } from "@angular/core";
import { HeroeComponente } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations:[
    HeroeComponente,
    ListadoComponent],
    exports:[ListadoComponent],
    imports:[
      CommonModule
    ]
})


export class heroesModule{}
