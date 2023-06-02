import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/services/carro.service';
import { CiudadService } from 'src/app/services/ciudad.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public myForm!:FormGroup;
  isLoggedIn = false;

  constructor(private fb:FormBuilder,private loginPrd:CiudadService,
    private routerprd:Router,private carroser:CarroService) {
      console.log("CErrar carro");
      this.carroser.removeAllCart()     
    this.myForm = this.createMyForm();
   }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',[Validators.required]],
      password:['',Validators.required]
    });
  }
  // Supongamos que tienes un formulario llamado "myForm" creado mediante createMyForm()

// Obtener el valor del campo "usuario"


  public submitFormulario(){
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }
   // Condicionar acciones basadas en el valor del campo "usuario"
if (this.myForm.controls['usuario'].value == 'admin@gmail'  && this.myForm.controls['password'].value == '1234567') {
  // Realizar acciones específicas para el usuario "admin"
  this.routerprd.navigateByUrl("/inicio");
  console.log('Bienvenido, administrador!');
} else if(this.myForm.controls['usuario'].value == 'vendedor@gmail'  && this.myForm.controls['password'].value == '1234567') {
  // Realizar acciones para otros usuarios
  this.routerprd.navigateByUrl("/iniicio");
  console.log('Bienvenido!');
}else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Usuario o contraseña incorrecto!',
  })
}

   /*  if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrecto!',
      })
     }else{
        this.routerprd.navigateByUrl("/inicio");
        this.isLoggedIn = true;
     }*/

  }

  public get f():any{
    return this.myForm.controls;
  }


}
