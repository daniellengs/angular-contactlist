import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  constructor(private contatosService:ContatosService) { }

  carregando = false;
  contatos:Contato[];
  inputNome = "";
  inputFone = "";

  //ngOnInit popula a lista de contatos
  ngOnInit() {
    this.carregando = true;
    this.contatosService.getContatos().subscribe(contatos => {
        this.contatos = contatos;
        this.carregando = false;
      });
  }

  delete(contato) {
    this.contatosService.deleteContato(contato).subscribe(c => {
      let index = this.contatos.indexOf(contato);
      this.contatos.splice(index, 1);
    });
  }

  //INSERIR CONTATO
  insertContato() {
    let contato:Contato = {
      nome: this.inputNome,
      telefone: this.inputFone
    };
    this.contatosService.saveContato(contato).subscribe(c => {this.contatos.push(c);});
    this.clearForm();
  }
  clearForm() {
    this.inputNome = "";
    this.inputFone = "";
  }

}
