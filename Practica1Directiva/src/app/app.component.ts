import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[] = [

    new Empleado("juana", "Diaz", "presidente", 7500),
    new Empleado("Ana", "Martin", "Directora", 7000),
    new Empleado("Maria", "Diaz", "Jefa seccion", 6500),
    new Empleado("Laura", "Lopez", "Administrativo", 6500),

  ];



}
