import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  constructor() { }

  @Input()
  // @Input('xyz')
  public Progresso: number = 25;

  ngOnInit() {
  }

}
