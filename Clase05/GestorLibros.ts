import {Libro} from './libro';
import * as readlineSync from 'readline-sync';

class GestorLibros {

    biblioteca:Libro[] = [];

    agregarLibro (newName:string,newAuthor:string,newYear:number,newPages:number){
        let nuevoLibro = new Libro(newName,newAuthor,newPages,newYear) 
        this.biblioteca.push(nuevoLibro);
    }

    consultarLibro(numLibroToConsult:number){
        let libroToConsult:Libro = this.biblioteca[numLibroToConsult];
        console.log(`Nombre: ${libroToConsult.consultaNombre()}, Autor: ${libroToConsult.consultaAutor()}, Año: ${libroToConsult.consultaYear()}, Páginas: ${libroToConsult.consultaPaginas()} `);
    }

    modificarLibro(libroToModify:number){
        
        let newName = String(readlineSync.question(`Ingrese el nombre del libro: `));
        let newAuthor = String(readlineSync.question(`Ingrese el nombre del Autor: `));
        let newYear = Number(readlineSync.question(`Ingrese el año del libro: `));
        let newPages = Number(readlineSync.question(`Ingrese las paginas del libro: `));

        let modificado = new Libro(newName,newAuthor,newPages,newYear) ;
        this.biblioteca[libroToModify] = modificado;
    }

    eliminarLibro(libroToDelete:number){
        delete this.biblioteca[libroToDelete];
        console.log(`Libro eliminado correctamente`)
    }

    mostrar(){
       console.log(this.biblioteca);
    }

}

let archivo = new GestorLibros;

function fNewLibro(){
        let newName = String(readlineSync.question(`Ingrese el nombre del libro: `));
        let newAuthor = String(readlineSync.question(`Ingrese el nombre del Autor: `));
        let newYear = Number(readlineSync.question(`Ingrese el año del libro: `));
        let newPages = Number(readlineSync.question(`Ingrese las paginas del libro: `));
        archivo.agregarLibro(newName,newAuthor,newYear,newPages);
}

fNewLibro();

let consultaLibro: number;
let modificarLibro: number;
let eliminarLibroNum:number;

let consulta = Number(readlineSync.question(`(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : `));

while (consulta !== 6){
    if (consulta == 1){
        fNewLibro();
    }else if (consulta == 2){
        consultaLibro = Number(readlineSync.question(`Ingrese el numero del Libro a consultar: `));
        archivo.consultarLibro(consultaLibro);
    } else if (consulta == 3){
        modificarLibro = Number(readlineSync.question(`Ingrese el numero del libro a modificar: `));
        archivo.modificarLibro(modificarLibro);
    } else if (consulta == 4){
        eliminarLibroNum = Number(readlineSync.question(`Ingrese el numero del libro a eliminar: `));
        archivo.eliminarLibro(eliminarLibroNum);
    } else if (consulta == 5){
        archivo.mostrar();
    }

    consulta = Number(readlineSync.question(`(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : `));
}



