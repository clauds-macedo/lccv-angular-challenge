import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Item } from '../../registros/shared/item.model';
import { RegistrosServices } from '../../registros/shared/services/registros.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  registros!: Item[];
  inputControl!: FormGroup

  constructor(private registrosService: RegistrosServices) { }

  ngOnInit(): void {
    this.registrosService.getAll()
      .subscribe( r => this.registros = r )
    console.log(this.registrosService.getAll())
    this.inputControl = new FormGroup({
      'numero': new FormControl('', [Validators.required, Validators.minLength(1)]) ,
      'prestador': new FormControl('', [Validators.required]),
      'valor': new FormControl('', [Validators.required]),
      'inicio': new FormControl('', [Validators.required]),
      'fim': new FormControl('', [Validators.required])
    })
  }
  onSubmit(){
    console.log(this.inputControl.value)
    let novoContrato = this.inputControl.value
    this.registrosService.create(novoContrato)
      .subscribe()
    setTimeout(() => location.reload(), 2000)
  }
}
