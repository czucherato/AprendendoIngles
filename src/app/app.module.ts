import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './componentes/app.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { PainelComponent } from './componentes/painel/painel.component';
<<<<<<< HEAD
import { TentativasComponent } from './componentes/tentativas/tentativas.component';
=======
import { ProgressoComponent } from './componentes/progresso/progresso.component';
>>>>>>> progresso

@NgModule({
  declarations: [
  ApppComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
    ],
    imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
