import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',  
    pathMatch:'full', //tira os espaços
    redirectTo:'home' //toda vez que for vazio redireciona para home
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule)//importa o modulo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
