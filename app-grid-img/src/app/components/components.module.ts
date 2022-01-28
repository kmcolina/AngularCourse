import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ImagenComponent } from './imagen/imagen.component';

//import { PagesModule } from '../pages/pages.module';


@NgModule({
  declarations: [
    NavbarComponent,
    ImagenComponent
  ],
  imports: [
    CommonModule,
    //PagesModule
  ],
  exports: [
    NavbarComponent,
    ImagenComponent
  ],
})
export class ComponentsModule { }
