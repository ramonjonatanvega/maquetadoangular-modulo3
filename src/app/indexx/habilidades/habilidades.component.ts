import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service'; 

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
//inicializar variables de instancia
  habilidades: any=[]


  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.portfolioService.getDatos().subscribe(portfolio => {
      //console.log(portfolio);  
      //aqui se define informacion a mostrar
      this.habilidades=portfolio.habilidades;
  
  
    });
  }

}
