export class Persona {

    id? : number;
    nombre : string;
    apellido : string;           
    banner : string;
    foto_perfil : string;
    titulo : string;
    ubicacion : string;
    correo:string;
    contrasenia:string;
    acerca_de : string;
    
 
    

   constructor(nombre:string, apellido:string, banner:string, foto_perfil:string, titulo:string, ubicacion:string, correo:string, contrasenia:string, acerca_de:string ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.banner = banner;
    this.foto_perfil = foto_perfil;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.acerca_de = acerca_de;
   
   
   } 

}
