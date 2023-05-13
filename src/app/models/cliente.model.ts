import { Estado } from "./estado.model";

export class Cliente {

    codigo?:number;
	
	nombre?:string;
	
	apellido?:string;

    dni?:string;

    sexo?:string;

    fechanaci?:string;

    estado?:Estado;
}
