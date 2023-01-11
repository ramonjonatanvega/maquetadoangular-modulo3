import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs'
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 // edit(value: any) {
  //  throw new Error('Method not implemented.');
 // }
  url= 'http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }

 
         
   

  //traela lista de experiencia del backend
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `lista`);
  }
  public listaPer(id: number): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `ver/${id}`);
  }

 //ver experiencia por id
  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
    }

  //crea Experiencia
  public createExp(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + `crear`, experiencia);
  }
 
   // updateExp(experiencia: Experiencia):Observable<any> {
    //  const urlExpId = this.url + `editar/${experiencia.id}`;
   //   return this.httpClient.put<Experiencia>(urlExpId, experiencia);
   // }

  //elimina experiencia por id
  public deleteExp(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'borrar/' + id);
  }

 

}
