import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Componentes/app.component';
import { TopoComponent } from './Componentes/Topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
