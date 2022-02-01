import { Component, Input, OnInit, Output } from '@angular/core';

import { DataImageService } from 'src/app/services/data-image.service';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}



@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  loaded: boolean =false;
  urlHijo: string = "url";
  @Input() validOtpForm: boolean = false;
  buttonEnabled: boolean = false;
  option: string = "e";

  Valid: boolean =false;



  //@Output() cambioNombre = new EventEmitter();
  constructor(private dataImagen:DataImageService) { }

  ngOnInit(): void {
  }
  //https://picsum.photos/96/96/?random

    title = 'app-grid-img';
   tiles: Tile[] = [
    {text: 'Two', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://i.picsum.photos/id/875/96/96.jpg?hmac=yZNb6FB3oq6MBDC7Gkp_xhNHphda--0bQbB3rTuWqk4'},
    {text: 'Two', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://i.picsum.photos/id/1037/96/96.jpg?hmac=LKn9hc79oeb_EzpE5hRkbvjGuvKgl5MAq3lrTtLznhM'},
    {text: 'Three', cols: 0.5, rows: 0.5, color: 'lightpink', image: 'https://i.picsum.photos/id/638/96/96.jpg?hmac=m-ZL_Z0VdZk77IJlyX9cc-qIq9FkvnuJBGjeAj9YObE'},
    {text: 'Four', cols: 0.5, rows: 0.5, color: '#DDBDF1', image: 'https://i.picsum.photos/id/145/96/96.jpg?hmac=ElnFBJJJ0aFUTBijz4Dtiuc5I6hFoaCr13Q2kUMDs1s'},
    {text: 'five', cols: 0.5, rows: 0.5, color: 'lightblue', image: 'https://i.picsum.photos/id/154/96/96.jpg?hmac=YtHhnb07KRveGv7EKtMxeSatMMp8ntWAx7YisHMk7fA'},
    {text: 'six', cols: 0.5, rows: 0.5, color: 'lightgreen', image: 'https://i.picsum.photos/id/194/96/96.jpg?hmac=fUmw4Se34lrMvOl7WxmOCtqnrTf95263XQSvUMWPA14'},
  ];

  nombre: string = "Nombre usuario";

  cambiarNombre(){
    this.nombre = "nombre en funcion images";
    //this.cambioNombre.emit(this.nombre);
    this.dataImagen.nombrUsuario = this.nombre;
     this.validOtpForm = true;
  }

   myfunction(message : Tile){
     this.dataImagen.url = message.image;
      this.urlHijo =  message.image;
      this.validOtpForm = true;
      this.Valid = true;

     // alert(message.image);

  }
  loadMyChildComponent(){
     this.nombre = "nombre en funcion images";
    this.loaded=true;
    this.urlHijo = this.urlHijo;
   }

     checkOtpController(event:any) {
    this.validOtpForm = event;
    this.buttonEnabled = this.validOtpForm ;
    console.log(this.buttonEnabled);
    if (this.option == 'e') this.buttonEnabled = true;
  }
}
