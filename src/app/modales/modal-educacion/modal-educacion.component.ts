import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
 //creamos la propiedad
  educaForm: FormGroup;
  nombreInstitucion: string ='';
  logoInstitucion : string ='';
  titulo : string = '';
  fechaInicio: string ='';
  fechaFin : string = '';
  esEstudioActual : boolean = false;
  personaId : number = 1;

  //importamos el FormBuilder
  constructor(private formBuilder : FormBuilder, private serviEducacion:EducacionService) { 
   
     //Creamos el grupo de controles para el formulario 
     this.educaForm=this.formBuilder.group({
      nombreInstitucion:['',[Validators.required]],
      logoInstitucion:['',[Validators.required]],     
      titulo:['',[Validators.required]],
      fechaInicio :[''],
      fechaFin :[''],
      esEstudioActual :[''],
   })

  }

  ngOnInit(): void {}
  
  get Educacion(){
    return this.educaForm.get("educacion");
  }

  get Descripcion(){
    return this.educaForm.get("descripcion");
  }
 
  onCrear(): void {
    const educacion = new Educacion(this.nombreInstitucion, this.logoInstitucion,  this.titulo, this.fechaInicio, this.fechaFin, 
     this.esEstudioActual, this.personaId);
   this.serviEducacion.crear(educacion).subscribe(data =>{alert("Experiencia añadida");
  window.location.reload();
});
}
limpiar() : void{
  this.educaForm.reset();
  alert("se limpio correctamente");
}

onEnviar(event: Event){
  event.preventDefault();
  if(this.educaForm.valid){
    this.onCrear();
    alert("se creo correctamente");
  }else{
    alert("falló en la carga, intente nuevamente");
    this.educaForm.markAllAsTouched();
  }    
}

}
