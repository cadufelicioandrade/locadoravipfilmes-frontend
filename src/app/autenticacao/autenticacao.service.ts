import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient) { }


  autenticar(username:string, password:string):Observable<any>{
    return this.httpCliente.post('http://localhost:5001/Login', { 
      userName:username, 
      passWord:password
    });
  }

}
