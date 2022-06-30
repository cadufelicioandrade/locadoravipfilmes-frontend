import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private cadastroUsuarioService:CadastroUsuarioService
              ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      username:['', [Validators.required, Validators.minLength(3), minusculoValidator]],
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required]],
      repassword:['', [Validators.required]]
    });
  }

  cadastrar(){
    var usuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.cadastroUsuarioService.cadastrarUsuario(usuario).subscribe((data)=>{
      console.log(data);
    }, e => {
      alert(e.error.message);
    });
  }

}
