import { Categoria } from "./categoria.model";
import { Estado } from "./estado.model";

export class Electro {

    codigoele?:number;
	
	cate?:Categoria;
	
	descripcion?:string;
	
	stock?:number;
	
	precio?:number;

	marca?:string;

    estado?:Estado;
}
