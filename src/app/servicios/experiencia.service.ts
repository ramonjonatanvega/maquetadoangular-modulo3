import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable } from 'rxjs'
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  edit(value: any) {
    throw new Error('Method not implemented.');
  }
  url= 'http://localhost:8080/experiencia/'
  constructor(private httpClient:HttpClient) { }

  //traela lista de experiencia del backend
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
    }

  public createExp(experiencia: Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', experiencia);
  }

  public editar(experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', experiencia);
    }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + 'delete/${id}');
  }

  /*public edit(experiencia: Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.url + 'update', experiencia);
    }*/

}
