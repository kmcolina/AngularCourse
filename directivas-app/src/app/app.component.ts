import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';

  mensaje = "Registro exitoso";

  condition = false;

  nombre:String = "";
  apellido:String = "";

  entradas: any;

  constructor(){
    this.entradas = [
      {titulo: "Python cada dia mas presente"},
      {titulo: "Java presente desde hace mas de 20 años"},
      {titulo: "JS cada vez mas funcional"},
      {titulo: "Angular desde cero"},
      {titulo: "¿Donde quedo pascal?"}
    ]
  }




  registro(){
    this.condition = true;
    this.mensaje = "Registro exitoso"
  }
}
