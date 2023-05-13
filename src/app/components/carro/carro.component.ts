import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Carro } from 'src/app/models/carro.model';
import { Cliente } from 'src/app/models/cliente.model';
import { CarroService } from 'src/app/services/carro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {

  
  public products : Carro[] = [];

   //public clie: number=0;
   objcliente: Cliente={
    codigo:2,
    nombre:"",
    apellido:"",
    dni:"",
    sexo:"-1",
    fechanaci:"2021-08-16",
    estado: {
			estado: 1,	
		}
  };

  public atri : Carro []=[];

 
  public productList = new BehaviorSubject<any>([]);
  public grandTotal : number=0;
  public cantTotal : number=0;

  constructor(private route:ActivatedRoute,private router:Router,private carroser:CarroService){
  

  this.carroser.ObtenerProducts()
  .subscribe(res=>{
    this.products = res;
    this.grandTotal = this.carroser.getTotalPrice();
    this.cantTotal = this.carroser.getCantidaTotal();
  })

}

 limpiarcarro(){
  this.carroser.removeAllCart()
 }

 procesarfinalizar(){

  this.products.forEach((a:Carro) => {

    a.codcli= this.objcliente.codigo;
    a.total= this.grandTotal;

    });
    console.log(this.products);
    this.carroser.FinalizarCompra(this.products).subscribe(
      (x)=>{         

      }      
    );
    Swal.fire('Correcto',"Transaccion exitosa",'success') 
    this.limpiarcarro()

   
}

}
