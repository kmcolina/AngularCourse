import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImagenesComponent} from './pages/imagenes/imagenes.component'
import {ImagenComponent} from './components/imagen/imagen.component';

const routes: Routes = [
//{path: '', pathMatch: 'full', redirectTo: 'images' },
//{path:'',component: AppComponent},
{path: 'images', component: ImagenesComponent},
{path: 'image',component: ImagenComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
