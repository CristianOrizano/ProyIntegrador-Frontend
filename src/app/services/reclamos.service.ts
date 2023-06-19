import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamo } from '../models/reclamo.model';
import { Observable } from 'rxjs';


//const baseURL="https://decorous-control-production.up.railway.app/reclamos";
const baseURL="https://hilarious-trip-production.up.railway.app/reclamos";
@Injectable({
  providedIn: 'root'
})
export class ReclamosService {

  
  constructor(private http:HttpClient) { }

    //metodo del la api para poder listar
listareclamo():Observable<Reclamo[]>{
  return this.http.get<Reclamo[]>(baseURL);
}

 //metodo del la api para poder Registrar
 Registrar(data:Reclamo):Observable<any>{
  return this.http.post<any>(baseURL,data);
   }


      //metodo del la api para poder Registrar
 Eliminar(idProve:number):Observable<any>{
  return this.http.delete<any>(baseURL+"/"+idProve);
   }

}
