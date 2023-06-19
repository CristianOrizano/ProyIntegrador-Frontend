import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad.model';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

const baseURL="https://hilarious-trip-production.up.railway.app/consulta";
//const baseURL="http://localhost:8091/consulta";
@Injectable({
  providedIn: 'root'
})

export class CiudadService {
  private ingresar:boolean = false;

  constructor(private httpclient: HttpClient) {}

  public  ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario == 'cristian' && obj.password=='123';
      return this.ingresar;
  }
  listarDetalles(cod:number):Observable<Proveedor[]>{
    return this.httpclient.get<Proveedor[]>(baseURL+"/"+cod);
  }






  
}
