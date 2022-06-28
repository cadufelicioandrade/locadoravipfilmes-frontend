import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoRoutingModule } from './estado-routing.module';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';


@NgModule({
  declarations: [
    ListaEstadosComponent
  ],
  imports: [
    CommonModule,
    EstadoRoutingModule
  ]
})
export class EstadoModule { }
