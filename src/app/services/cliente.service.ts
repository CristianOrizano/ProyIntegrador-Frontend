import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';


const baseURL="https://decorous-control-production.up.railway.app/cliente";
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  //metodo del la api para poder listar
listaCliente():Observable<Cliente[]>{
  return this.http.get<Cliente[]>(baseURL);
}

 //metodo del la api para poder Registrar
 Registrar(data:Cliente):Observable<any>{
  return this.http.post<any>(baseURL,data);
   }

   //metodo del la api para poder Registrar
 Actualizar(data:Cliente):Observable<any>{
  return this.http.put<any>(baseURL,data);
   }

      //metodo del la api para poder Registrar
 Eliminar(idCli:number):Observable<any>{
  return this.http.delete<any>(baseURL+"/"+idCli);
   }

}
