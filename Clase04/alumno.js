"use strict";
/*  Ejercicio 1
Aplicar lo visto hasta esta clase para modelar un
sistema educativo donde:
• Los profesores deben tener un listado de sus
alumnos y deben poder calificarlos(Utilizar la
función Math.random).
• Cada alumno debe saber su nota y si está
aprobado o no(es decir si la nota es mayor
que 7).
• La escuela debe tener un registro de los
alumnos y maestros, y debe poder
matricular/contratar y expulsar/despedir a los
mismos. */
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(name, note) {
        this.nombre = name;
        this.nota = note;
    }
    Alumno.prototype.aprobar = function () {
        if (this.nota >= 7) {
            console.log("Aprobado");
        }
        else {
            console.log("Desaprobado");
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
