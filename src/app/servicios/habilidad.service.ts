import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  edit(value: any) {
    throw new Error('Method not implemented.');}

    url= 'http://localhost:8080/skill/'
  constructor(private httpClient:HttpClient) { }

 //traela lista de experiencia del backend
 public lista(): Observable<Habilidad[]>{
  return this.httpClient.get<Habilidad[]>(this.url + 'lista');
}

public listaPer(id: number): Observable<Habilidad[]>{
  return this.httpClient.get<Habilidad[]>(this.url + `persona/${id}/lista`);
}

public detail(id: number):Observable<Habilidad>{
  return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }

public crear(habilidad: Habilidad):Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', habilidad);
}

public editar(habilidad: Habilidad):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update', habilidad);
  }

public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'delete/${id}');
}

/*public edit(experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update', experiencia);
  }*/

}