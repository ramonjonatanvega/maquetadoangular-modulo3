import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
  nombre: string = '';
  imagen: string = '';
  fecha: string = '';
  descripcion: string = '';
  url: string = '';
  personaId: number = 1;

  //declaraciones para ver y capturar la imagen
  public previsualizacion?: string;
  public archivos: any = []

  //importamos el FormBuilder    fgdfgdfsfdfff
  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private serviProyecto: ProyectoService) {

    //creamos el grupo de controles para el formulario
    this.proyecForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required,]],
      fecha: [''],
      descripcion: ['', [Validators.required, ]],
      url: [''],
     
    })

  }

  ngOnInit(): void { }


  get Nombre() {
    return this.proyecForm.get("proyecto");
  }

  get Descripcion() {
    return this.proyecForm.get("descripcion");
  }


  onCrear(): void {
    const proyecto = new Proyecto(this.nombre, this.imagen, this.fecha, this.descripcion, this.url,
      this.personaId);
    this.serviProyecto.crear(proyecto).subscribe(data => {
      alert("Experiencia añadida");
      window.location.reload();
    });
  }
  limpiar(): void {
    this.proyecForm.reset();
    alert("se limpio correctamente");
  }

  onEnviar(event: Event) {
    event.preventDefault();
    if (this.proyecForm.valid) {
      this.onCrear();
      alert("se creo correctamente");
    } else {
      alert("falló en la carga, intente nuevamente");
      this.proyecForm.markAllAsTouched();
    }
  }





  //metodo para ver y capturar la imagen
  capturarFile(event: any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado)

  }

  //crear base 64 para la visualizar la imagen
  extraerBase64 = async ($event: any) => new Promise((resolve, reject): void | any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  

}
