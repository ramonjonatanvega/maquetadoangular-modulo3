import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url= 'http://localhost:8080/educacion/'
  constructor(private httpClient:HttpClient) { }

    public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + 'lista');
    }

    public listaPer(id: number): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + `persona/${id}/lista`);
    }
 
    public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
    }
  
    public crear(Estudio: Educacion):Observable<any>{
      return this.httpClient.post<any>(this.url + 'crear', Estudio);
      }
  
    public edit(Estudio: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', Estudio);
      }
  
    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

  
}
  

