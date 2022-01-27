import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';


@NgModule({
  declarations: [
    ImagenesComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    ImagenesComponent
  ]
})
export class PagesModule { }
