import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  // esta es una forma pero no es la que va
  // nombre = 'Jonatan';
  //apellido = 'Vega';

  //aqui se crea variables de instancia para almacenar los datos con los que trata el servicio
  nombre:string='';
  apellido:string='';
  acerca:string='';
  constructor(
  //inyectar el servicio para tener acceso en la clase a los metodos
  private portfolioService:PortfolioService) { }


  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
     console.log(portfolio);  
     //aqui se define informacion a mostrar
     this.nombre=portfolio.nombre;
     this.apellido=portfolio.apellido;
     this.acerca=portfolio.acerca;
    });
  }
}
