import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  habiliForm:FormGroup;
    
 
  habilidades:Habilidad[] = [];
  
  constructor(private serviHabilidad: HabilidadService,
              private formBuilder: FormBuilder,
              
               )
               { 
               
//creamos el grupo de controles para el formulario
this.habiliForm = this.formBuilder.group({
  id:[''],
  nombreHabilidad:['',[Validators.required]],      
  porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  }

 

  //trae lista para editar
  ngOnInit(): void {
    this.cargarHabilidad();
  }
  
  

  cargarHabilidad(): void {
    this.serviHabilidad.lista().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviHabilidad.detail(id).subscribe(
      {
        next: (data) => {
          this.habiliForm.patchValue(data);
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
    let habilidad = this.habiliForm.value;
    console.log()

    if (habilidad.id == '') {
      this.serviHabilidad.crear(habilidad).subscribe(
        data => {
          alert("Su nueva Experiencia fue añadida correctamente");
          this.cargarHabilidad();
          this.habiliForm.reset();
        }
      )
    } else {
      this.serviHabilidad.crear(habilidad).subscribe(
        data => {
          alert("Experiencia editada!!! BRAVOOOOO!!!!");
          this.cargarHabilidad();
          this.habiliForm.reset();
        }
      )
    }
  }
 

  borrar(id: number) {
    this.serviHabilidad.delete(id).subscribe(
      db => {
          alert("se pudo eliminar satisfactoriamente")
          this.cargarHabilidad();
          
        },
        error => {
        alert("No se pudo eliminar")
        })
      }
    
  }
