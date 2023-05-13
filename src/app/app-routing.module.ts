import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ElectroComponent } from './components/electro/electro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CompraSeleccComponent } from './components/compra-selecc/compra-selecc.component';
import { CarroComponent } from './components/carro/carro.component';


const routes: Routes = [
  {path:'inicio', component: PrincipalComponent,
  children:[
    {path:'',component:InicioComponent},
    {path:'electro',component:ElectroComponent},
    {path:'cliente',component:ClienteComponent},
    {path:'proveedor',component:ProveedorComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'carro',component:CarroComponent},
    {path: 'comprasel/:idpro', component: CompraSeleccComponent },
   
  ] },
  {path: 'login', component: LoginComponent },
  {path: '', redirectTo:'login',pathMatch:'full' },
  {path: '**', redirectTo:'login',pathMatch:'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
