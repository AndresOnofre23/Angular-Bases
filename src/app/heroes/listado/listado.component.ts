import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  public heroes : String [] =['Spiderman','Deapoll','Hul','Acuaman'];
  eliminado : String ="";

  borrar ():void {
    const eliminado = this.heroes.pop();
    this.eliminado = eliminado;
    console.log(eliminado);
 }

}
