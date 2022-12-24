import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent implements OnInit {
   //creamos la propiedad
  habiliForm: FormGroup;
  nombreHabilidad: string ='';
  porcentaje : string ='' ;
  personaId : number = 1;

  constructor(private formBuilder: FormBuilder, private serviHabilidad: HabilidadService) { 

      //creamos el grupo de controles para el formulario
      this.habiliForm = this.formBuilder.group({
        nombreHabilidad:['',[Validators.required, Validators.minLength(8)]],      
        porcentaje:['',[Validators.required]],
        })
    
    }

  ngOnInit(): void {}

  //declarar para los campos
  get Habilidad(){
    return this.habiliForm.get("habilidad");
  }

  get Porcentaje(){
    return this.habiliForm.get("porcentaje");
  }

 

  onCrear(): void {
    const habilidad = new Habilidad(this.nombreHabilidad, this.porcentaje, 
     this.personaId);
   this.serviHabilidad.crear(habilidad).subscribe(data =>{alert("Experiencia añadida");
  window.location.reload();
});
}
limpiar() : void{
  this.habiliForm.reset();
  alert("se limpio correctamente");
}

onEnviar(event: Event){
  event.preventDefault();
  if(this.habiliForm.valid){
    this.onCrear();
    alert("se creo correctamente");
  }else{
    alert("falló en la carga, intente nuevamente");
    this.habiliForm.markAllAsTouched();
  }    
}

}
