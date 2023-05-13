import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Electro } from '../models/electro.model';


const baseURL="https://decorous-control-production.up.railway.app/electro";
@Injectable({
  providedIn: 'root'
})
export class ElectroService {

  constructor(private http:HttpClient) { }
//metodo del la api para poder listar
listaElectro():Observable<Electro[]>{
  return this.http.get<Electro[]>(baseURL);
}

 //metodo del la api para poder Registrar
 Registrar(data:Electro):Observable<any>{
  return this.http.post<any>(baseURL,data);
   }

   //metodo del la api para poder Registrar
 Actualizar(data:Electro):Observable<any>{
  return this.http.put<any>(baseURL,data);
   }

      //metodo del la api para poder Registrar
 Eliminar(idElec:number):Observable<any>{
  return this.http.delete<any>(baseURL+"/"+idElec);
   }

   BuscarProductos(cod:number):Observable<Electro>{
    return this.http.get<Electro>(baseURL+"/"+cod);
  }


}
