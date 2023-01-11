import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrls: ['./modal-persona.component.css']
})
export class ModalPersonaComponent implements OnInit {
 //creamos la propiedad
 persoForm: FormGroup;
 nombre: string ='';
 apellido : string ='';
 banner : string = '';
 foto_perfil: string ='';
 titulo : string = '';
 ubicacion : string = '';
 acerca_de : string = '';
 

 //importamos el FormBuilder
 constructor(private formBuilder : FormBuilder, private serviPersona:PersonaService) { 
  
    //Creamos el grupo de controles para el formulario 
    this.persoForm=this.formBuilder.group({
     //objetos definidos(declarados) para el formulario reactivo  persoForm 
     nombre:['',[Validators.required]],
     apellido:['',[Validators.required]],
     banner:['',[Validators.required]],
     foto_perfil:['',[Validators.required]],     
     titulo:['',[Validators.required ]],
     ubicacion :['',[Validators.required ]],
     acerca_de :['',[Validators.required ]],
     
  })

 }

  ngOnInit(): void { }

  get Nombre(){
    return this.persoForm.get("nombre");
  }

  get Apellido(){
    return this.persoForm.get("apellido");
  }

  get Banner(){
    return this.persoForm.get("banner");
  }

  get Foto_perfil(){
    return this.persoForm.get("foto_Perfil");
  }


  get Titulo(){
    return this.persoForm.get("titulo");
  }
 
  get Ubicacion(){
    return this.persoForm.get("ubicacion");
  }

  get Acerca_de(){
    return this.persoForm.get("sobreMi");
  }

  onCrear(): void {
    const educacion = new Persona (this.nombre, this.apellido,  this.banner, this.foto_perfil, this.titulo, 
     this.ubicacion, this.acerca_de);
   this.serviPersona.crear(educacion).subscribe(data =>{alert("Experiencia añadida");
  window.location.reload();
});
}

limpiar() : void{
  this.persoForm.reset();
  alert("se limpio correctamente");
}

onEnviar(event: Event){
  event.preventDefault();
  if(this.persoForm.valid){
    this.onCrear();
    alert("se creo correctamente");
  }else{
    alert("falló en la carga, intente nuevamente");
    this.persoForm.markAllAsTouched();
  }    
}
}
