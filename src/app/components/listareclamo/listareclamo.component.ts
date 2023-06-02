import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reclamo } from 'src/app/models/reclamo.model';
import { ReclamosService } from 'src/app/services/reclamos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listareclamo',
  templateUrl: './listareclamo.component.html',
  styleUrls: ['./listareclamo.component.css']
})
export class ListareclamoComponent {

  bol: Reclamo[] = [];

  constructor(private reclserv:ReclamosService,private router:Router){

    this.listarReclamo();
  
  }
  listarReclamo(){
    this.reclserv.listareclamo().subscribe((data)=>{
      this.bol= data;
     
    });
  }

    //metodo para Eliminar admin
    Eliminar(recla:Reclamo){

      Swal.fire({
        title: '¿Desea Finalizar?',
        text: "Solo finalizar si el reclamo esta solucionado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Finaliza.',
        cancelButtonText: 'No, cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
            
            this.reclserv.Eliminar(recla.codigo || 0).subscribe(
              (x)=>{         
                 Swal.fire('Finalizado Correcto',"Exito al finalizar",'success') 
                 this.listarReclamo();
              }      
            );
            
          }
      })
    }





}
