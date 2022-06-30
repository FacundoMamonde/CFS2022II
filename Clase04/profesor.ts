import {Alumno} from "./alumno";

export class Profesor{
    nombreProfesor:string;
    alumno1 = new Alumno("Facundo",7);
    alumno2 = new Alumno("Junior",5);
    
    alumnos:Alumno[] = [this.alumno1,this.alumno2];

    constructor(nameP:string){
        this.nombreProfesor = nameP;
    }
}