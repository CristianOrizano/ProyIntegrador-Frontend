import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carro } from '../models/carro.model';
import { HttpClient } from '@angular/common/http';
import { Boleta } from '../models/boleta.model';


const baseURL="https://decorous-control-production.up.railway.app/boleta";
@Injectable({
  providedIn: 'root'
})
export class CarroService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }


  addtoCart(product : any){

    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)
    
    this.cartItemList.forEach((a:any)=> {
      a.importe= a.cantidad*a.precio;
      
    });
  }

  ObtenerProducts(){
    return this.productList.asObservable();
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.importe;
    })
    return grandTotal;
  }

  getCantidaTotal() : number{
    let cantTotal = 0;
    this.cartItemList.map((a:any)=>{
      cantTotal += a.cantidad;
    })
    return cantTotal;
  }

  FinalizarCompra(car:Carro[]):Observable<any>{
    return this.http.post<any>(baseURL,car);
  }

  listarBoleta():Observable<Boleta[]>{
    return this.http.get<Boleta[]>(baseURL);
  }
  

}
