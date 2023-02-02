import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrls: ['./modal-persona.component.css']
})
export class ModalPersonaComponent implements OnInit {
  //Se inicializa el formulario.
  persoForm: FormGroup;
  id?: number;
  nombre: string = '';
  apellido: string = '';
  banner: string = '';
  foto_perfil: string = '';
  titulo: string = '';
  ubicacion: string = '';
  correo: string = '';
  contrasenia: string = '';
  acerca_de: string = '';


  //Se inyectan los servicios que se van a utilizar.
  constructor(private formBuilder: FormBuilder, private serviPersona: PersonaService, public imagenesService: ImageService) {

    //Se crea el formulario, con sus propiedades y validaciones. 
    this.persoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      banner: ['', [Validators.required]],
      foto_perfil: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
      acerca_de: ['', [Validators.required]],


    })

  }

  ngOnInit(): void { }

  get Nombre() {
    return this.persoForm.get("nombre");
  }

  get Apellido() {
    return this.persoForm.get("apellido");
  }

  get Banner() {
    return this.persoForm.get("banner");
  }

  get Foto_perfil() {
    return this.persoForm.get("foto_perfil");
  }


  get Titulo() {
    return this.persoForm.get("titulo");
  }

  get Ubicacion() {
    return this.persoForm.get("ubicacion");
  }

  get Correo() {
    return this.persoForm.get("correo");
  }

  get Contrasenia() {
    return this.persoForm.get("contrasenia");
  }

  get Acerca_de() {
    return this.persoForm.get("acerca_de");
  }

  onCrear(): void {
    /*
   Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, 
   junto con los demás valores del formulario.
   */

    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    this.persoForm.value.banner = this.imagenesService.url;
    this.persoForm.value.foto_perfil = this.imagenesService.url;
    this.serviPersona.crear(this.persoForm.value).subscribe(data => {
      alert("Nuevo Curso agregado");
      this.clearForm();
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //esto es para limpiar los campos del formulario
  limpiar(): void {
    this.persoForm.reset();
  }


  clearForm() {
    this.imagenesService.url = "";
    this.persoForm.reset({});
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Persona';
    this.imagenesService.uploadImage($event, name);
  }

}
