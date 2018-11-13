import { Component, OnInit } from '@angular/core';
import { Frase }  from '../../models/frase.model';
import { FRASES } from '../../mocks/frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  constructor() { console.log(this.Frases); }

  public Frases: Frase[] = FRASES;

  ngOnInit() {
  }

}
