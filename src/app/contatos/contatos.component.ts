import { Component, OnInit } from '@angular/core';
//Importando a descrição do objecto Contact
import { Contato } from './contato.model';

//Importando o Serviço
import { ContatosService } from './contatos.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  //Propriedade para controlar o estado de loading da aplicação
  carregando = false;
  //Lista de contatos
  contatos:Contato[];
  inputNome = "";
  inputFone = "";
  constructor(private contatosService:ContatosService) { }

  //ngOnInit popula a lista de contatos
  ngOnInit() {
    this.carregando = true;
    this.contatosService.getContatos().subscribe(contatos => {
        this.contatos = contatos;
        this.carregando = false;
      });
  }

  //DELETAR CONTATO
  delete(contato) {
    //Chamamos o método deleteContact do serviço, dando subscribe
    this.contatosService.deleteContato(contato).subscribe(c => {
      //Após o retorno do servidor, removemos o contato da nossa lista 'contacts'
      let index = this.contatos.indexOf(contato);
      this.contatos.splice(index, 1);
    });
  }

  //INSERIR CONTATO
  insertContato() {
    //Carregamos os dados de inputName e inputPhone para construir nosso objeto Contact
    let contato:Contato = {
      Nome: this.inputNome,
      Telefone: this.inputFone
    };
    this.contatosService.saveContato(contato).subscribe(c => {this.contatos.push(c);});
    this.clearForm();
  }
  clearForm() {
    this.inputNome = "";
    this.inputFone = "";
  }

}
