import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrosRoutingModule } from './registros-routing.module';
import { GeralComponent } from './components/geral/geral.component';
import { ItensComponent } from './components/itens/itens.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeralComponent,
    ItensComponent,
    ProjetosComponent,
  ],
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrosModule { }
