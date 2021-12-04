import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeralComponent } from './components/geral/geral.component';
import { ItensComponent } from './components/itens/itens.component';
import { ProjetosComponent } from './components/projetos/projetos.component'

const routes: Routes = [
  { path: '', component: GeralComponent },
  { path: 'itens', component: ItensComponent },
  { path: 'projetos', component: ProjetosComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
