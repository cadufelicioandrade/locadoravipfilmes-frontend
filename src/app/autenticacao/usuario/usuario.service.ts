import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({});

  constructor(private tokenService:TokenService) { 
    if(this.tokenService.hasToken()){
      this.decodificarJWT();
    }
  }

  private decodificarJWT(){
    const token = this.tokenService.getToken();
    const usuario = jwt_decode(token) as Usuario;
    this.usuarioSubject.next(usuario);
  }

  getUsuario(){
    return this.usuarioSubject.asObservable();
  }

  saveToken(token:string){
    this.tokenService.saveToken(token);
    this.decodificarJWT();
  }

  logout(){
    this.tokenService.removeToken();
    this.usuarioSubject.next({});
  }

  isLogged(){
    return this.tokenService.hasToken();
  }
}
