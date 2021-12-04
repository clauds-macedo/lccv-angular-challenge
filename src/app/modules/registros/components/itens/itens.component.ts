import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../shared/item.model';
import { RegistrosServices } from '../../shared/services/registros.service'


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  registros!: Item[];
  inputControl!: FormGroup;


  constructor(private registrosService: RegistrosServices) { }

  ngOnInit(): void {
    this.registrosService.getAll()
      .subscribe( r => this.registros = r )

    this.inputControl = new FormGroup({
      'prestador': new FormControl('', [Validators.required]),
      'ordem': new FormControl(''),
      'itemOrdem': new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.inputControl.value)
  }

}
