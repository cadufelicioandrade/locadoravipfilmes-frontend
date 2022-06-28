import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';

const routes: Routes = [
  {
    path:'',
    component: ListaEstadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
