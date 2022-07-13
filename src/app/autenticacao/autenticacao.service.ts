import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpCliente: HttpClient, 
              private usuarioSevice: UsuarioService) { }

  autenticar(username:string, password:string):Observable<HttpResponse<any>>{
    return this.httpCliente.post('http://localhost:5001/Login', { 
      userName:username, 
      passWord:password
    },
    {
      observe: 'response'
    }).pipe(
      tap((resp)=>{
        const authToken = resp.headers.get("x-access-token") ?? '';
        this.usuarioSevice.saveToken(authToken);
      })
    );
  }

}
