import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarRoutingModule } from './listar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';




@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ListarRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ListarModule { }
