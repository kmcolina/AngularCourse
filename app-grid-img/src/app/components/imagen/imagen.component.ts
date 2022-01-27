import { Component, Input, OnInit } from '@angular/core';
import { DataImageService } from 'src/app/services/data-image.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() nombreHijo: string = 'no hay nombre default imagen';
  //constructor(private dataImagen:DataImageService ) { }
  constructor(public dataImagen: DataImageService) { }
  ngOnInit(): void {
  }

  cambiarNombre(){
      this.dataImagen.nombrUsuario = this.nombreHijo;
  }

}

// https://stackblitz.com/edit/angular-kvsjre?file=src%2Fapp%2Fapp.component.ts

//https://stackoverflow.com/questions/60954324/how-to-change-component-when-click-on-button-angular
