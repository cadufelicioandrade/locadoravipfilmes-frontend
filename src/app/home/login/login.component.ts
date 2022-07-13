import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  passWord = '';

  constructor(private authService: AutenticacaoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autenticar(this.userName, this.passWord)
    .subscribe(
      data =>{
        this.router.navigate(['estado'])

      console.log(data);
    }, 
    error =>{
      console.log(error);
    });
  }

}
