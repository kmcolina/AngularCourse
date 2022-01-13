import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroPalabraPipePipe } from './filtro-palabra-pipe.pipe';
import { ChildComponent } from './child.component';
import { SharkDirective } from './shark.directive';
import { MathOperationsService } from './math-operations.service';
import { ComponentChildComponent } from './component-child/component-child.component';
import { ComponentFatherRouterNestingComponent } from './component-father-router-nesting/component-father-router-nesting.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ChildOnerRouterNestingComponent } from './child-oner-router-nesting/child-oner-router-nesting.component';
import { ChildTwoRouterNestingComponent } from './child-two-router-nesting/child-two-router-nesting.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltroPalabraPipePipe,
    ChildComponent,
    SharkDirective,
    ComponentChildComponent,
    ComponentFatherRouterNestingComponent,
    ComponentOneComponent,
    ChildOnerRouterNestingComponent,
    ChildTwoRouterNestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MathOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
