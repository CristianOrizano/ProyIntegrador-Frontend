import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  public page!:number;

  //este es un arreglo de tipo Admin
  //con lo cual se llena y se lista
  liscliente: Cliente[] = [];
    //este es un arreglo de tipo Ciudad

  //este es propiedad de tipo entidad
  //en el cual estoy inicializando sus valores que no debe ingresar
   objcliente: Cliente={
    codigo:0,
    nombre:"",
    apellido:"",
    dni:"",
    sexo:"-1",
    fechanaci:"2021-08-16",
    estado: {
			estado: 1,	
		}
  };

  constructor(private serclien:ClienteService,private router:Router){

    this.listarCliente();

  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listarCliente(){
    this.serclien.listaCliente().subscribe((data)=>{
      this.liscliente= data;
     
    });
  }

    //metodo para registrar admin
     RegistrarCliente(){
      this.serclien.Registrar(this.objcliente).subscribe(
        (x)=>{         
           Swal.fire('Registro Correcto',"Exito al registrar",'success') 
           this.LimpiarInput();
           this.router.navigate(['inicio/cliente']);
           this.listarCliente();

        }      
      )
    }
        //metodo para buscar
        Buscar(ad :Cliente){
           this.objcliente =ad;
        }

         //metodo para anular actu
         Cerrar(){
          this.listarCliente();
          this.LimpiarInput();
         
       }

       LimpiarInput(){
        this.objcliente = { 
          codigo:0,
          nombre:"",
          apellido:"",
          dni:"",
          sexo:"-1",
          fechanaci:"2021-08-16",
          estado: {
            estado: 1,	
          }
      }
    }


   //metodo para registrar admin
   ActualizarCliente(){
    this.serclien.Actualizar(this.objcliente).subscribe(
      (x)=>{         
         Swal.fire('Actualizado Correcto',"Exito al Actualizar",'success') 
         this.listarCliente();
      }      
    )
  }

   //metodo para Eliminar admin
   Eliminar(regelec:Cliente){

    Swal.fire({
      title: '¿Desea eliminar?',
      text: "Los cambios no se van a revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimina.',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
          
          this.serclien.Eliminar(regelec.codigo || 0).subscribe(
            (x)=>{         
               Swal.fire('Eliminado Correcto',"Exito al Eliminar",'success') 
               this.listarCliente();
            }      
          );
          
        }
    })
  }

} 
