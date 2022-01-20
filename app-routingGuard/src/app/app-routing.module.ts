import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentOneComponent} from './component-one/component-one.component';
import {ComponentTwoComponent} from './component-two/component-two.component';
import { ActivateGuardGuard} from './activate-guard.guard';
import {DeactivateGuardGuard} from './deactivate-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  { path: 'component-one', component: ComponentOneComponent },
  { path: 'component-two', component: ComponentTwoComponent,
  canActivate: [ActivateGuardGuard], canDeactivate: [DeactivateGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
