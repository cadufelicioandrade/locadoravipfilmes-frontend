import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NovoUsuario } from './novo-usuario';


@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastrarUsuario(novoUsuario: NovoUsuario ){
    return this.httpClient.post("http://localhost:5001/Cadastro", novoUsuario);
  }

  validarUsuarioExistente(userName:string){
    return this.httpClient.get(`http://localhost:5001/Valida/${userName}`);
  }

}
