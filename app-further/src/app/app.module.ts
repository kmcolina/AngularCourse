import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltroPalabraPipePipe } from './filtro-palabra-pipe.pipe';
import { ChildComponent } from './child.component';
import { SharkDirective } from './shark.directive';

@NgModule({
  declarations: [
    AppComponent,
    FiltroPalabraPipePipe,
    ChildComponent,
    SharkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
