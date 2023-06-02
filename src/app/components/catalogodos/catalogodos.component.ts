import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Electro } from 'src/app/models/electro.model';
import { ElectroService } from 'src/app/services/electro.service';

@Component({
  selector: 'app-catalogodos',
  templateUrl: './catalogodos.component.html',
  styleUrls: ['./catalogodos.component.css']
})
export class CatalogodosComponent {
  elec: Electro[] = [];


  constructor(private router:Router,private serelectr:ElectroService){
      
    this.listarElectro();

  }

  listarElectro(){
    this.serelectr.listaElectro().subscribe((data)=>{
      this.elec= data;
    });
  }

  agrega(e:Electro){
    this.router.navigate(['/iniicio/comprasel/'+e.codigoele]);
  }
}
