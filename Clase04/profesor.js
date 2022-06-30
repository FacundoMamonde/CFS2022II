"use strict";
exports.__esModule = true;
exports.Profesor = void 0;
var alumno_1 = require("./alumno");
var Profesor = /** @class */ (function () {
    function Profesor(nameP) {
        this.alumno1 = new alumno_1.Alumno("Facundo", 7);
        this.alumno2 = new alumno_1.Alumno("Junior", 5);
        this.alumnos = [this.alumno1, this.alumno2];
        this.nombreProfesor = nameP;
    }
    return Profesor;
}());
exports.Profesor = Profesor;
