import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Carro } from 'src/app/models/carro.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Electro } from 'src/app/models/electro.model';
import { CarroService } from 'src/app/services/carro.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ElectroService } from 'src/app/services/electro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent {

  dtOptions: DataTables.Settings = {};
  public page!:number;
  public products : Carro[] = [];

   //public clie: number=0;
   objcliente: Cliente={
   
    nombre:"",
    apellido:"",
    dni:"",
    sexo:"",
    
    estado: {
			estado: 1,	
		}
  };

  liscliente: Cliente[] = [];

  public atri : Carro []=[];

 
  public productList = new BehaviorSubject<any>([]);
  public grandTotal : number=0;
  public cantTotal : number=0;

  constructor(private route:ActivatedRoute,private router:Router,private carroser:CarroService,private sercli:ClienteService){
  

  this.carroser.ObtenerProducts()
  .subscribe(res=>{
    this.products = res;
    this.grandTotal = this.carroser.getTotalPrice();
    this.cantTotal = this.carroser.getCantidaTotal();
  })


}

listarCliente(){
  this.sercli.listaCliente().subscribe((data)=>{
    this.liscliente= data;
   
  });
}

 //metodo para buscar
 Buscar(ad :Cliente){
  this.objcliente =ad;
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
