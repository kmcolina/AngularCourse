import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { ComponentsModule } from '../components/components.module';
import { ImagenSelectedComponent } from './imagen-selected/imagen-selected.component';


@NgModule({
  declarations: [
    ImagenesComponent,
    ImagenSelectedComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule

  ],
  exports:[
    ImagenesComponent,
    ImagenSelectedComponent

  ]
})
export class PagesModule { }
