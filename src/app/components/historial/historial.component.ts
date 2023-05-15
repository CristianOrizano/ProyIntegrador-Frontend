import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Boleta } from 'src/app/models/boleta.model';
import { Proveedor } from 'src/app/models/proveedor.model';
import { CarroService } from 'src/app/services/carro.service';
import { CiudadService } from 'src/app/services/ciudad.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  bol: Boleta[] = [];
  detalles: Proveedor[] = [];

  obj: Boleta={
    numeroBoleta:0,
    fechaEmision:"",

  };

  constructor(private boletaserv:CarroService,private router:Router,private detaservi:CiudadService){

    this.listarBoletas();
  
  }
  listarBoletas(){
    this.boletaserv.listarBoleta().subscribe((data)=>{
      this.bol= data;
     
    });
  }

  listarDetalles(cod:Boleta){
    this.detaservi.listarDetalles(cod.numeroBoleta || 0).subscribe((data)=>{
      this.detalles= data;
     
    });
  }



}
