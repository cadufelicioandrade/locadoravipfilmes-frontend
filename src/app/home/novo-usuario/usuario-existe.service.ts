import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { first, map, switchMap } from 'rxjs';
import { CadastroUsuarioService } from './cadastro-usuario.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private cadastroUsuarioService:CadastroUsuarioService) { }

  usuarioExiste(){
    return (control:AbstractControl) => {
      return control.valueChanges.pipe(
      switchMap((userName) => this.cadastroUsuarioService.validarUsuarioExistente(userName)),
      map((usuarioExiste)=> usuarioExiste ? {usuarioExiste:true} : null),
      first()
    );
  };
}

}
