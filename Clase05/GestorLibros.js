"use strict";
exports.__esModule = true;
var libro_1 = require("./libro");
var readlineSync = require("readline-sync");
var GestorLibros = /** @class */ (function () {
    function GestorLibros() {
        this.biblioteca = [];
    }
    GestorLibros.prototype.agregarLibro = function (newName, newAuthor, newYear, newPages) {
        var nuevoLibro = new libro_1.Libro(newName, newAuthor, newPages, newYear);
        this.biblioteca.push(nuevoLibro);
    };
    GestorLibros.prototype.consultarLibro = function (numLibroToConsult) {
        var libroToConsult = this.biblioteca[numLibroToConsult];
        console.log("Nombre: ".concat(libroToConsult.consultaNombre(), ", Autor: ").concat(libroToConsult.consultaAutor(), ", A\u00F1o: ").concat(libroToConsult.consultaYear(), ", P\u00E1ginas: ").concat(libroToConsult.consultaPaginas(), " "));
    };
    GestorLibros.prototype.modificarLibro = function (libroToModify) {
        var newName = String(readlineSync.question("Ingrese el nombre del libro: "));
        var newAuthor = String(readlineSync.question("Ingrese el nombre del Autor: "));
        var newYear = Number(readlineSync.question("Ingrese el a\u00F1o del libro: "));
        var newPages = Number(readlineSync.question("Ingrese las paginas del libro: "));
        var modificado = new libro_1.Libro(newName, newAuthor, newPages, newYear);
        this.biblioteca[libroToModify] = modificado;
    };
    GestorLibros.prototype.eliminarLibro = function (libroToDelete) {
        delete this.biblioteca[libroToDelete];
        console.log("Libro eliminado correctamente");
    };
    GestorLibros.prototype.mostrar = function () {
        console.log(this.biblioteca);
    };
    return GestorLibros;
}());
var archivo = new GestorLibros;
function fNewLibro() {
    var newName = String(readlineSync.question("Ingrese el nombre del libro: "));
    var newAuthor = String(readlineSync.question("Ingrese el nombre del Autor: "));
    var newYear = Number(readlineSync.question("Ingrese el a\u00F1o del libro: "));
    var newPages = Number(readlineSync.question("Ingrese las paginas del libro: "));
    archivo.agregarLibro(newName, newAuthor, newYear, newPages);
}
fNewLibro();
var consultaLibro;
var modificarLibro;
var eliminarLibroNum;
var consulta = Number(readlineSync.question("(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : "));
while (consulta !== 6) {
    if (consulta == 1) {
        fNewLibro();
    }
    else if (consulta == 2) {
        consultaLibro = Number(readlineSync.question("Ingrese el numero del Libro a consultar: "));
        archivo.consultarLibro(consultaLibro);
    }
    else if (consulta == 3) {
        modificarLibro = Number(readlineSync.question("Ingrese el numero del libro a modificar: "));
        archivo.modificarLibro(modificarLibro);
    }
    else if (consulta == 4) {
        eliminarLibroNum = Number(readlineSync.question("Ingrese el numero del libro a eliminar: "));
        archivo.eliminarLibro(eliminarLibroNum);
    }
    else if (consulta == 5) {
        archivo.mostrar();
    }
    consulta = Number(readlineSync.question("(1) Agregar Libro - (2) Consultar Libro - (3) Modificar Libro - (4) Eliminar Libro - (5) Mostrar Biblioteca - (6) Salir : "));
}
