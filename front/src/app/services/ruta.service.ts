import { Injectable } from '@angular/core';

@Injectable()
export class RutaService {

  //public ruta_servidor="http://localhost:8000/";
  //public ruta_servidor="http://localhost/indalo/api/public/"; //Local stalin
  public ruta_servidor="http://vivomedia.com.ar/compras_indalo/api/public/"; //Servidor de Rafael

  constructor() { }

  get_ruta(){
  	return this.ruta_servidor;
  }

}
