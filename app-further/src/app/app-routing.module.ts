import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponentChildComponent } from './component-child/component-child.component';

const routes: Routes = [
  {path: 'padre', component:AppComponent},
  {path: 'hijo', component: ComponentChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
