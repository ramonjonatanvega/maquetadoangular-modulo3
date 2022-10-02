import { Injectable } from '@angular/core';
//esto es para suscribirse y que reciba respuesta de forma asincro
import { Observable } from 'rxjs';
//esto es para poder hacer repeticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//El primer http se llama alias
  constructor(private http:HttpClient) { }

  //Metodo observable que devuelve los datos
  getDatos():Observable<any> {
    //Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
    return this.http.get('./assets/json/portfolio.json');
  }

}
