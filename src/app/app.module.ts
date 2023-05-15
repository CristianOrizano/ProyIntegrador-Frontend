import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { DataTablesModule } from "angular-datatables";
import {NgxPaginationModule} from 'ngx-pagination';

import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ElectroComponent } from './components/electro/electro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { CompraSeleccComponent } from './components/compra-selecc/compra-selecc.component';
import { CarroComponent } from './components/carro/carro.component';
import { HistorialComponent } from './components/historial/historial.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    PrincipalComponent,
    ElectroComponent,
    ClienteComponent,
    ProveedorComponent,
    CatalogoComponent,
    CompraSeleccComponent,
    CarroComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgxPaginationModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
