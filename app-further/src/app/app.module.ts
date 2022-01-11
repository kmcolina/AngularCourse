import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroPalabraPipePipe } from './filtro-palabra-pipe.pipe';
import { ChildComponent } from './child.component';
import { SharkDirective } from './shark.directive';
import { MathOperationsService } from './math-operations.service';
import { ComponentChildComponent } from './component-child/component-child.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltroPalabraPipePipe,
    ChildComponent,
    SharkDirective,
    ComponentChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MathOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
