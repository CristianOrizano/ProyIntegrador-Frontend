import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private routerprd:Router) {
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

  public submitFormulario(){
    if(this.myForm.invalid){
        Object.values(this.myForm.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }

     if(!this.loginPrd.ingresarAplicativo(this.myForm.value)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrecto!',
      })
     }else{
        this.routerprd.navigateByUrl("/inicio");
        this.isLoggedIn = true;
     }
  }

  public get f():any{
    return this.myForm.controls;
  }


}
