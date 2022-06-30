export class Alumno{
    private nombre:string;
    private nota:number;

    constructor(name:string,note:number){
        this.nombre = name;
        this.nota = note;
    }

    aprobar(){
        if (this.nota >= 7){
            console.log("Aprobado")
        } else {
            console.log("Desaprobado")
        }
    }
}