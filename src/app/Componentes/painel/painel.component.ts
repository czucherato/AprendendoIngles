import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase }  from '../../models/frase.model';
import { FRASES } from '../../mocks/frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  constructor() {
    this.atualizarRodada();
   }

  public Frases: Frase[] = FRASES;
  public Instrucao: string = 'Traduza a frase';
  public Resposta: string = '';
  public Rodada: number = 0;
  public RodadaFrase: Frase;
  public Progresso: number = 0;
  public Tentativas: number = 3;
  @Output()
  public EncerrarJogo: EventEmitter<string> = new EventEmitter();

  ngOnInit() { }

  ngOnDestroy() { }

  public atualizarResposta(resposta: Event): void {
    this.Resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {  

    if(this.RodadaFrase.frasePtBr ==  this.Resposta) {
      
      this.Progresso += (100 / this.Frases.length);
      this.Rodada++;

      if(this.Rodada === 4) {
        this.EncerrarJogo.emit('vitoria');
      }

      this.atualizarRodada();
    }else {
      this.Tentativas--;

      if(this.Tentativas === -1) {
        this.EncerrarJogo.emit('derrota');
      }
    }
  }

  public atualizarRodada(): void {
    this.RodadaFrase = this.Frases[this.Rodada];
    this.Resposta = '';
  }
}
