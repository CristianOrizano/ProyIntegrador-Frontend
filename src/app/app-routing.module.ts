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
import { HistorialComponent } from './components/historial/historial.component';
import { PrincipaldosComponent } from './components/principaldos/principaldos.component';
import { CatalogodosComponent } from './components/catalogodos/catalogodos.component';
import { CompraselecdosComponent } from './components/compraselecdos/compraselecdos.component';
import { ReclamosComponent } from './components/reclamos/reclamos.component';
import { ListareclamoComponent } from './components/listareclamo/listareclamo.component';


const routes: Routes = [
  {path:'inicio', component: PrincipalComponent,
  children:[
    {path:'',component:InicioComponent},
    {path:'electro',component:ElectroComponent},
    {path:'cliente',component:ClienteComponent},
    {path:'proveedor',component:ProveedorComponent},
    {path:'catalogo',component:CatalogoComponent},
    {path:'reclamos',component:ListareclamoComponent},
    {path: 'comprasel/:idpro', component: CompraSeleccComponent },
    {path: 'historial', component: HistorialComponent },
   
  ] },

  {path:'iniicio', component: PrincipaldosComponent,
  children:[
    {path:'',component:InicioComponent},
    {path:'catalogo',component:CatalogodosComponent},
    {path:'cliente',component:ClienteComponent},
    {path:'carro',component:CarroComponent},
    {path:'reclamos',component:ReclamosComponent},
    {path: 'comprasel/:idpro', component: CompraselecdosComponent },
    {path: 'historial', component: HistorialComponent },
   
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
