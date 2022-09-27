import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
}
)
export class HeroeComponente{
  public nombre:string='airon man';
  edad: number=23;

  get nombreCapitalizado():string {
     return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${ this.nombre}-${this.edad}`;
  }
  cambiarNombre():void{
    console.log('hey');
    this.nombre='spiderman';
  }
  cambiarEdad():void{
    this.edad=4;
  }
}
