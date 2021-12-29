import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService) { }

  empleados:Empleado[] = [
    new Empleado( "Juana", "Diaz", "presidente", 7500),
    new Empleado( "Ana", "Martin", "Directora", 7000),
    new Empleado( "Maria", "Diaz", "Jefa seccion", 6500),
    new Empleado( "Laura", "Lopez", "Administrativo", 6500)
  ];

  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:" +" \n "+ empleado.nombre + "\n" + "Salario" + empleado.salario );
    this.empleados.push(empleado);
  }
}
