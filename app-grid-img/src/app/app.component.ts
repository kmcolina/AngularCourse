import { Component,ViewChild } from '@angular/core';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';

/* export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//<img src="https://picsum.photos/200/300/?random">
//https://stackoverflow.com/questions/48493652/angular-5-mat-grid-list-responsive

// https://stackblitz.com/edit/angular-material-image-list?file=src%2Fapp%2Fshared%2Fshared.module.ts
export class AppComponent {
/*   title = 'app-grid-img';
   tiles: Tile[] = [
    {text: 'Two', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://picsum.photos/96/96/?random'},
    {text: 'Two', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://picsum.photos/96/96/?random'},
    {text: 'Three', cols: 0.5, rows: 0.5, color: 'lightpink', image: 'https://picsum.photos/96/96/?random'},
    {text: 'Four', cols: 0.5, rows: 0.5, color: '#DDBDF1', image: 'https://picsum.photos/96/96/?random'},
    {text: 'five', cols: 0.5, rows: 0.5, color: 'lightblue', image: 'https://picsum.photos/96/96/?random'},
    {text: 'six', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://picsum.photos/96/96/?random'},
  ]; */

 @ViewChild(ImagenesComponent) child!:ImagenesComponent;
  nombre: string = "";
  validOtpForm: boolean = false;
  loaded: boolean = false;
  buttonEnabled: boolean = false;
  option = 'e';


 cambiarNombre(){
  this.nombre = "nombre en funcion images";
  //this.cambioNombre.emit(this.nombre);
  console.log("valid option es ",this.validOtpForm  );
   this.validOtpForm = true;
   console.log("valid option es despues de cambiar click",this.validOtpForm  );

}

loadMyChildComponent(){
   this.nombre = "nombre en funcion images";
  this.loaded=true;
  //this.urlHijo = this.urlHijo;
 }

   checkOtpController(event:any) {
     console.log("valid en check controller ", event)
  this.validOtpForm = event;
  this.buttonEnabled = this.validOtpForm ;
  console.log(this.buttonEnabled);
  if (this.option == 'e') this.buttonEnabled = true;
}
}
