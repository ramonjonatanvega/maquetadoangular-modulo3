
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Experiencia } from 'src/app/model/experiencia';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  experienForm:FormGroup;
    
 
  experiencias:Experiencia[] = [];
  
  constructor(private serviExperiencia: ExperienciaService,
              private formBuilder: FormBuilder,
              
               )
               { 
               

     //Creamos el grupo de controles para el formulario 
     this.experienForm = this.formBuilder.group({
      id:[''],
      nombreEmpresa:[''],
      logoEmpresa:[''],     
      puesto:[''],
      descripcion:[''],
      fechaInicio :[''],
      fechaFin :[''],
      esTrabajoActual :[''],
      personaId:[],
      })

  }

 

  //trae lista para editar
  ngOnInit(): void {
    this.cargarExperiencia();
  }
  
  

  cargarExperiencia(): void {
    this.serviExperiencia.lista().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviExperiencia.detail(id).subscribe(
      {
        next: (data) => {
          this.experienForm.patchValue(data);
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
    let experiencia = this.experienForm.value;
    console.log()

    if (experiencia.id == '') {
      this.serviExperiencia.createExp(experiencia).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarExperiencia();
          this.experienForm.reset();
        }
      )
    } else {
      this.serviExperiencia.edit(experiencia).subscribe(
        data => {
          alert("Experiencia editada!");
          this.cargarExperiencia();
          this.experienForm.reset();
        }
      )
    }
  }
 

  borrar(id: number) {
    this.serviExperiencia.deleteExp(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarExperiencia();
          
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
    
  }