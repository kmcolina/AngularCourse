import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService, private route:ActivatedRoute ) {

  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
    }

  volverHome(){
    this.router.navigate(['']);
  }

  empleados:Empleado[] = [];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;
  indice:number;

  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario );
    //this.miServicio.muestraMensaje("nombre del empleado: "+ miEmpleado.nombre);

    this.empleadosService.actualizarEmpleadoServicio(miEmpleado, this.indice);
    this.router.navigate(['']);
  };

  eliminaEmpleado(){
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate(['']);

  };

}
