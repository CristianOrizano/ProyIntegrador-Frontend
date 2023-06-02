import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReclamosService } from 'src/app/services/reclamos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.css']
})
export class ReclamosComponent {
  dtOptions: DataTables.Settings = {};
  public page!:number;
  objcliente: Cliente={
    nombre:"",
    apellido:"",
    dni:"",
    sexo:"",
    
    estado: {
			estado: 1,	
		}
  };

  objrecla: Reclamo={
    cliente: {
			
		}
   
  };

  liscliente: Cliente[] = [];

  constructor(private route:ActivatedRoute,private router:Router,private sercli:ClienteService,private reclamosser:ReclamosService){
  
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
  RegistrarProv(){
    if (this.objrecla.cliente) {
      this.objrecla.cliente.codigo = this.objcliente.codigo;
    }
    this.reclamosser.Registrar(this.objrecla).subscribe(
      (x)=>{         
         Swal.fire('Registro Correcto',"Exito al registrar",'success') 
         this.LimpiarInput();
         this.objcliente={
          
        };
      
      }

    )
  }

  LimpiarInput(){
    this.objrecla = { 
     
  }
}



  
}
