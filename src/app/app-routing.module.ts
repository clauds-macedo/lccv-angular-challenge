import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'registros',
  loadChildren: () => import('./modules/registros/registros.module')
  .then(m => m.RegistrosModule)},
  {path: 'listar',
  loadChildren: () => import('./modules/listar/listar.module')
  .then(m => m.ListarModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
