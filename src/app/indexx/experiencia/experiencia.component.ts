import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
/*import { PortfolioService } from 'src/app/servicios/portfolio.service';*/

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];


  constructor(/*private portfolioService:PortfolioService*/private serviExperiencia:
  ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    /*this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);  
      //aqui se define informacion a mostrar
      this.experiencias=portfolio.experiencias;
     
     });*/
  }

  cargarExperiencia():void{
    this.serviExperiencia.lista().subscribe(data => {this.experiencias=data});
  }



/*experiencia:any[]=[
  {
      id: 0,
      logoEmpresa:"assets/IMG/descarga.png",
      nombreEmpresa:"ElDon",
      descripcionPuesto:"Manejo de Robot de Corte y Tizador Computarizado"
  },
  {
      id: 1,
      logoEmpresa:"assets/IMG/lowww.png",
      nombreEmpresa:"Low Cost - Soluciones informaticas",
      descripcionPuesto:"Tecnico en Reparación Y Systemas"
  },
  {
      id: 2,
      logoEmpresa:"assets/IMG/servicio-tecnico.png",
      nombreEmpresa:"Electronica Low-Cost",
      descripcionPuesto:"Reparacion de electronica en General:"
  }
]*/
}
