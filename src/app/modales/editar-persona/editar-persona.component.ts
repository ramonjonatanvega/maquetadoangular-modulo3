import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  persoForm:FormGroup;
    
 
  personas:Persona[] = [];
  
  constructor(private serviPersona:PersonaService,
              private formBuilder: FormBuilder,
              
               )
               { 
       //Creamos el grupo de controles para el formulario 
    this.persoForm=this.formBuilder.group({
      //objetos definidos(declarados) para el formulario reactivo  persoForm 
      id:[''],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      banner:['',[Validators.required]],
      foto_perfil:['',[Validators.required]],     
      titulo:['',[Validators.required ]],
      ubicacion :['',[Validators.required ]],
      acerca_de :['',[Validators.required ]],
      
   })

  }

 

  //trae lista para editar
  ngOnInit(): void {
    this.cargarPersona();
  }
  
  

  cargarPersona(): void {
    this.serviPersona.lista().subscribe(
      data => {
        this.personas = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviPersona.detail(id).subscribe(
      {
        next: (data) => {
          this.persoForm.patchValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }
  //👇 esto es solo para hacer pruebas en local


  guardar() {
    console.log("FUNCIONA!!!")
    let persona = this.persoForm.value;
    console.log()

    if (persona.id == '') {
      this.serviPersona.crear(persona).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarPersona();
          this.persoForm.reset();
        }
      )
    } else {
      this.serviPersona.edit(persona).subscribe(
        data => {
          alert("Experiencia editada!!! BRAVOOOOO!!!!");
          this.cargarPersona();
          this.persoForm.reset();
        }
      )
    }
  }
 

  borrar(id: number) {
    this.serviPersona.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarPersona();
          
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
    
  }
