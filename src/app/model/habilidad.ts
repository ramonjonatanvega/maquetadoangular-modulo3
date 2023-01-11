export class Habilidad {
    id?: number;
    nombreHabilidad: string;
    porcentaje: string;
    personaid:number;
    

    constructor( nombreHabilidad:string, porcentaje:string, personaid: number ){
    this.nombreHabilidad = nombreHabilidad;
    this.porcentaje = porcentaje;
    this.personaid = personaid;
}
}