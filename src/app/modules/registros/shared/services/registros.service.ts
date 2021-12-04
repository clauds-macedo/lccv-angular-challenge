import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from '../item.model'

@Injectable({
  providedIn: 'root'
})
export class RegistrosServices {

  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })} ;
  private itemURL = 'http://localhost:3000/registros'
  constructor(public http: HttpClient) { }

  getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(this.itemURL, this.httpOptions)
  }

  create(registro: Item): Observable<Item>{
    return this.http.post<Item>(this.itemURL, registro, this.httpOptions)
  }

}