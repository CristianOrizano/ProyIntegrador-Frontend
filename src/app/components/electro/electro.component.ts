import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Electro } from 'src/app/models/electro.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ElectroService } from 'src/app/services/electro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-electro',
  templateUrl: './electro.component.html',
  styleUrls: ['./electro.component.css']
})
export class ElectroComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  public page!:number;

  //este es un arreglo de tipo Admin
  //con lo cual se llena y se lista
  liselec: Electro[] = [];
    //este es un arreglo de tipo Ciudad
  //con lo cual se llena el combo
  liscate: Categoria[] = [];

  //este es propiedad de tipo entidad
  //en el cual estoy inicializando sus valores que no debe ingresar
   electro: Electro={
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

  constructor(private serelec:ElectroService,private sercateg:CategoriaService,private router:Router){

    this.listarElectro();
    this.listarCategoria();
  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  listarElectro(){
    this.serelec.listaElectro().subscribe((data)=>{
      this.liselec= data;
     
    });
  }

  //metodo para listar ciudad
   listarCategoria(){
    
    this.sercateg.listacategoria().subscribe(
      (data)=>this.liscate= data
    );
  }

    //metodo para registrar admin
     RegistrarElectro(){
      this.serelec.Registrar(this.electro).subscribe(
        (x)=>{         
           Swal.fire('Registro Correcto',"Exito al registrar",'success') 
           this.LimpiarInput();
           this.router.navigate(['inicio/electro']);
           this.listarElectro();

        }      
      )
    }
        //metodo para buscar
        Buscar(ad :Electro){
           this.electro =ad;
        }

         //metodo para anular actu
         Cerrar(){
          this.listarElectro();
          this.LimpiarInput();
         
       }

       LimpiarInput(){
        this.electro = { 
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
          },
      }
    }


   //metodo para registrar admin
   ActualizarAdmin(){
    this.serelec.Actualizar(this.electro).subscribe(
      (x)=>{         
         Swal.fire('Actualizado Correcto',"Exito al Actualizar",'success') 
         this.listarElectro();
      }      
    )
  }

   //metodo para Eliminar admin
   Eliminar(regelec:Electro){

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
          
          this.serelec.Eliminar(regelec.codigoele || 0).subscribe(
            (x)=>{         
               Swal.fire('Eliminado Correcto',"Exito al Eliminar",'success') 
               this.listarElectro();
            }      
          );
          
        }
    })
  }
  
}
