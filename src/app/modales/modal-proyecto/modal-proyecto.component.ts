import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
//creamos la propiedad
proyecForm: FormGroup;
nombre: string ='';
imagen : string ='';
fecha : string = '';
descripcion : string = '';
url : string ='';
personaId : number = 1;

//importamos el FormBuilder
constructor( private formBuilder : FormBuilder, private serviProyecto:ProyectoService) { 

    //creamos el grupo de controles para el formulario
    this.proyecForm = this.formBuilder.group({
    nombre:['',[Validators.required, Validators.minLength(8)]],
    imagen:['',[Validators.required, Validators.minLength(8)]],     
    fecha:['',[Validators.required, Validators.minLength(10)]],
    descripcion:['',[Validators.required, Validators.minLength(15)]],
    url:[''],
    esTrabajoActual :[''],
    })

}

ngOnInit(): void {}

get Nombre(){
    return this.proyecForm.get("proyecto");
  }

  get Descripcion(){
    return this.proyecForm.get("descripcion");
  }

 
  onCrear(): void {
    const proyecto = new Proyecto(this.nombre, this.imagen,  this.fecha, this.descripcion, this.url,  
      this.personaId);
   this.serviProyecto.crear(proyecto).subscribe(data =>{alert("Experiencia añadida");
  window.location.reload();
});
}
limpiar() : void{
  this.proyecForm.reset();
  alert("se limpio correctamente");
}

onEnviar(event: Event){
  event.preventDefault();
  if(this.proyecForm.valid){
    this.onCrear();
    alert("se creo correctamente");
  }else{
    alert("falló en la carga, intente nuevamente");
    this.proyecForm.markAllAsTouched();
  }    
}

}
