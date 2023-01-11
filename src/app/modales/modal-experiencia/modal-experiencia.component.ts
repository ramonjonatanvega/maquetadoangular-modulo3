import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  //creamos la propiedad
  experienForm: FormGroup;
  nombreEmpresa: string ='';
  logoEmpresa : string ='';
  puesto : string = '';
  descripciondelPuesto : string ='';
  fechaInicio : string = '';
  fechaFin : string = '';
  esTrabajoActual : boolean = false;
  personaId : number = 1;
  
  //importamos el FormBuilder
  constructor( private formBuilder : FormBuilder, private serviExperiencia : ExperienciaService) { 
  
      //creamos el grupo de controles para el formulario
      this.experienForm = this.formBuilder.group({
      nombreEmpresa:['',[Validators.required]],
      logoEmpresa:['',[Validators.required]],     
      puesto:['',[Validators.required]],
      descripciondelPuesto:['',[Validators.required]],
      fechaInicio :[''],
      fechaFin :[''],
      esTrabajoActual :[''],
      personaid:[1],
      })
  
  }
   
  ngOnInit(): void {}


  get Puesto(){
    return this.experienForm.get("puesto");
    }
    get Descripcion(){
      return this.experienForm.get("descripcion");
    }
    
    onCreate(): void {
      const experiencia = new Experiencia(this.nombreEmpresa, this.logoEmpresa,  this.puesto, this.descripciondelPuesto, this.fechaInicio, this.fechaFin, 
       this.esTrabajoActual, this.personaId);
     this.serviExperiencia.createExp(experiencia).subscribe(data =>{alert("Experiencia añadida");
    window.location.reload();
  });
  }
  limpiar() : void{
    this.experienForm.reset();
    alert("se limpio correctamente");
  }

  onEnviar(event: Event){
    event.preventDefault();
    if(this.experienForm.valid){
      this.onCreate();
      alert("se creo correctamente");
    }else{
      alert("falló en la carga, intente nuevamente");
      this.experienForm.markAllAsTouched();
    }    
  }
    }


