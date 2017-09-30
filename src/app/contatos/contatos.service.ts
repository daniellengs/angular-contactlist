import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contato } from './contato.model';

@Injectable()
export class ContatosService {
  url = "https://nodejs-todolist-api.herokuapp.com/contacts/fhsf";
  constructor(private http: Http) { }
  getContatos() {

    return this.http.get(this.url)
      .map(response => response.json());
  }


  saveContato(contato){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, JSON.stringify(contato), options)
      .map(res => res.json());
  }
  deleteContato(contato){
    return this.http.delete(`${this.url}/${contato._id}`)
      .map(res => res.json());
  }

}
