import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildOnerRouterNestingComponent } from './child-oner-router-nesting/child-oner-router-nesting.component';
import { ChildTwoRouterNestingComponent } from './child-two-router-nesting/child-two-router-nesting.component';
import { ComponentChildComponent } from './component-child/component-child.component';
import { ComponentFatherRouterNestingComponent } from './component-father-router-nesting/component-father-router-nesting.component';
import { ComponentOneComponent } from './component-one/component-one.component';

const routes: Routes = [


  {path: 'hijo', component: ComponentChildComponent},
  {path: 'component-one', component: ComponentOneComponent},
  {path: 'component-two', component : ComponentFatherRouterNestingComponent,
    children: [

      {path: 'child-one', component: ChildOnerRouterNestingComponent},
      {path: 'child-two', component : ChildTwoRouterNestingComponent},
    ],

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
