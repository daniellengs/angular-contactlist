import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contato } from '../contato.model';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatosService :ContatosService) { }

  @Input() contato: Contato;
  @Output() contatoDeleted = new EventEmitter();

  remove() {
    this.contatoDeleted.emit();
  }

  ngOnInit() {
  }


}
