import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/models/carro.model';
import { Electro } from 'src/app/models/electro.model';
import { CarroService } from 'src/app/services/carro.service';
import { ElectroService } from 'src/app/services/electro.service';

@Component({
  selector: 'app-compra-selecc',
  templateUrl: './compra-selecc.component.html',
  styleUrls: ['./compra-selecc.component.css']
})
export class CompraSeleccComponent {

  idproducto: number=0;
  cantidad:number=1;


  compra: Electro={
    codigoele:0,
    cate:{
      codigocate:1,
    },
    descripcion:"",
    stock:0,
    precio:0,
    marca:"",
    estado: {
			estado: 1,	
		}
  };

  carr: Carro={
   
  };

  

  constructor(private route:ActivatedRoute,private carroser:ElectroService ,private router:Router,private sercarro:CarroService ){
    this.route.params.subscribe(params =>{
      this.idproducto = params['idpro']  
    });
    this.BuscarProducto();
   
  }

  addtocart(){
    this.carr.cantidad=this.cantidad;
    this.carr.codigopro=this.compra.codigoele;
    this.carr.precio=this.compra.precio;
    this.carr.descripcion=this.compra.descripcion;
  
    this.sercarro.addtoCart(this.carr);
    this.router.navigate(['inicio/carro']);
  
  }



BuscarProducto(){
   this.carroser.BuscarProductos(this.idproducto).subscribe((data)=>{
    this.compra= data;
   
  });;

}

}
