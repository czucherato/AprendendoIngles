import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../../models/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  constructor() { }

  @Input()
  public Tentativas: number;

  public Coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  ngOnChanges() {
    if(this.Tentativas !== this.Coracoes.length) {
      let indice = this.Coracoes.length - this.Tentativas;
      this.Coracoes[indice - 1].cheio = false;
    }
   }

  ngOnInit() { }
}
