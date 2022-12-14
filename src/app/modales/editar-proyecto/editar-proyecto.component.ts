import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proyecForm:FormGroup;
    
 
  proyectos:Proyecto[] = [];
  
  constructor(private serviProyecto:ProyectoService,
              private formBuilder: FormBuilder,
              
               )
               { 
               

     //creamos el grupo de controles para el formulario
    this.proyecForm = this.formBuilder.group({
      id:[''],
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required,]],
      fecha: [''],
      descripcion: ['', [Validators.required, ]],
      url: [''],
     
    })

  }

 

  //trae lista para editar
  ngOnInit(): void {
    this.cargarHabilidad();
  }
  
  

  cargarHabilidad(): void {
    this.serviProyecto.lista().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviProyecto.detail(id).subscribe(
      {
        next: (data) => {
          this.proyecForm.patchValue(data);
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
    let proyecto = this.proyecForm.value;
    console.log()

    if (proyecto.id == '') {
      this.serviProyecto.crear(proyecto).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarHabilidad();
          this.proyecForm.reset();
        }
      )
    } else {
      this.serviProyecto.crear(proyecto).subscribe(
        data => {
          alert("Experiencia editada!!! BRAVOOOOO!!!!");
          this.cargarHabilidad();
          this.proyecForm.reset();
        }
      )
    }
  }
 

  borrar(id: number) {
    this.serviProyecto.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarHabilidad();
          
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
    
  }
