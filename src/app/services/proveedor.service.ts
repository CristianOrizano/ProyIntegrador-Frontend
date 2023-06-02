import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';


const baseURL="https://decorous-control-production.up.railway.app/proveedor";
//const baseURL="http://localhost:8091/proveedor";
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  //metodo del la api para poder listar
listaProveedor():Observable<Proveedor[]>{
  return this.http.get<Proveedor[]>(baseURL);
}

 //metodo del la api para poder Registrar
 Registrar(data:Proveedor):Observable<any>{
  return this.http.post<any>(baseURL,data);
   }

   //metodo del la api para poder Registrar
 Actualizar(data:Proveedor):Observable<any>{
  return this.http.put<any>(baseURL,data);
   }

      //metodo del la api para poder Registrar
 Eliminar(idProve:number):Observable<any>{
  return this.http.delete<any>(baseURL+"/"+idProve);
   }

}
