import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  usuarioAutenticado: any;

  


  getToken() {
    throw new Error('Method not implemented.');
  }
  url="http://localhost:8080/persona/login";
  currentUserSubject: BehaviorSubject<any>;
  UsuarioAutenticado: any;
  constructor (private http:HttpClient) { 
  this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem
    ('currentUser')||'{}'));
}


IniciarSesion(credenciales:any):Observable<any>{
   return this.http.post(this.url, credenciales).pipe(map(data=>{
   sessionStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }));
}

 logOut():void{
  window.sessionStorage.clear();
}

}
