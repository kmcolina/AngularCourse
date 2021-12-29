import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de empleados';

  empleados:Empleado[] = [];


  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario );
    //this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpleado.nombre);

    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  };

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
}
