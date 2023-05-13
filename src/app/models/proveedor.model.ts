import { Estado } from "./estado.model";

export class Proveedor {

    codigo?:number;
	
	nombre?:string;
	
	direcion?:string;

    dni?:string;

    fono?:number;

    descripcion?:string;

    estado?:Estado;
}
