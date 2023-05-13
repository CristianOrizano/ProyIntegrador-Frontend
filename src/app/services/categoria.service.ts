import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';


const baseURL="https://decorous-control-production.up.railway.app/categoria";
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private httpclient: HttpClient) { }

  listacategoria():Observable<Categoria[]>{
    return this.httpclient.get<Categoria[]>(baseURL);
  }


}
