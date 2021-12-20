export class Empleado{

  nombre:String = "";
  apellido:String = "";
  cargo:String = "";
  salario:number = 0;

  constructor(nombre:string, apellido: string, cargo: string, salario:number){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }

}
