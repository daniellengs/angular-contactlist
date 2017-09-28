import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  @Input() contato = {
    nome: "",
    fone: ""
  }
  @Output() contatoDeleted = new EventEmitter();

  remove() {
    this.contatoDeleted.emit();
  }
  constructor() { }
  ngOnInit() {
  }


}
