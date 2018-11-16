import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public JogoEmAndamento: boolean = true;
  public TipoEncerramento: string;
  
  public encerrarJogo(tipo: string): void {
    this.JogoEmAndamento = false;
    this.TipoEncerramento = tipo;
   }

   public reiniciarJogo(): void {
     this.JogoEmAndamento = true;
     this.TipoEncerramento = undefined;
   }
}