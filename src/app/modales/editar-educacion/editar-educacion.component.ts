import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educaForm:FormGroup;
    
 
  educaciones:Educacion[] = [];
  constructor(private serviEducacion:EducacionService, private formBuilder: FormBuilder) { 

    //Creamos el grupo de controles para el formulario 
    this.educaForm=this.formBuilder.group({
      id:[''],
      nombreInstitucion:[''],
      logoInstitucion:[''],     
      titulo:[''],
      fechaInicio :[''],
      fechaFin :[''],
      esEstudioActual :[''],
      personaid:[],
   })
  }
 
  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.serviEducacion.lista().subscribe(
      data => {
        this.educaciones = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviEducacion.detail(id).subscribe(
      {
        next: (data) => {
          this.educaForm.patchValue(data);
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
    let educacion = this.educaForm.value;
    console.log()

    if (educacion.id == '') {
      this.serviEducacion.crear(educacion).subscribe(
        data => {
          alert("Su nueva Educación fue añadida correctamente");
          this.cargarEducacion();
          this.educaForm.reset();
        }
      )
    } else {
      this.serviEducacion.edit(educacion).subscribe(
        data => {
          alert("Educación editada!");
          this.cargarEducacion();
          this.educaForm.reset();
        }
      )
    }
  }

  borrar(id: number) {
    this.serviEducacion.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarEducacion()
        },
        error => {
        alert("No se pudo eliminar")
        })
      }

}
