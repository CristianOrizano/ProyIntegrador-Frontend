import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent  implements OnInit{

  dtOptions: DataTables.Settings = {};
  public page!:number;

  //este es un arreglo de tipo Admin
  //con lo cual se llena y se lista
  lisproveedor: Proveedor[] = [];
    //este es un arreglo de tipo Ciudad

  //este es propiedad de tipo entidad
  //en el cual estoy inicializando sus valores que no debe ingresar
   objproveed: Proveedor={
    codigo:0,
    nombre:"",
    direcion:"",
    dni:"",
    fono:0,
    descripcion:"",
    estado: {
			estado: 1,	
		}
  };

  constructor(private serprovee:ProveedorService,private router:Router){

    this.listarProveedo();

  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listarProveedo(){
    this.serprovee.listaProveedor().subscribe((data)=>{
      this.lisproveedor= data;
     
    });
  }

    //metodo para registrar admin
     RegistrarProveed(){
      this.serprovee.Registrar(this.objproveed).subscribe(
        (x)=>{         
           Swal.fire('Registro Correcto',"Exito al registrar",'success') 
           this.LimpiarInput();
           this.router.navigate(['inicio/proveedor']);
           this.listarProveedo();

        }      
      )
    }
        //metodo para buscar
        Buscar(ad :Proveedor){
           this.objproveed =ad;
        }

         //metodo para anular actu
         Cerrar(){
          this.listarProveedo();
          this.LimpiarInput();
         
       }

       LimpiarInput(){
        this.objproveed = { 
          codigo:0,
          nombre:"",
          direcion:"",
          dni:"",
          fono:0,
          descripcion:"",
          estado: {
            estado: 1,	
          }
      }
    }


   //metodo para registrar admin
   ActualizarProveedor(){
    this.serprovee.Actualizar(this.objproveed).subscribe(
      (x)=>{         
         Swal.fire('Actualizado Correcto',"Exito al Actualizar",'success') 
         this.listarProveedo();
      }      
    )
  }

   //metodo para Eliminar admin
   Eliminar(regprov:Proveedor){

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
          
          this.serprovee.Eliminar(regprov.codigo || 0).subscribe(
            (x)=>{         
               Swal.fire('Eliminado Correcto',"Exito al Eliminar",'success') 
               this.listarProveedo();
            }      
          );
          
        }
    })
  }



}
