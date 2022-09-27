import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
public nombreheroeBorrado:string='';
heroes:string []=['aironman','spiderman','hulk','chica maravilla'];

borrarHeroe():void{
  this.nombreheroeBorrado=this.heroes.shift()||'';

}

}

