
export class Televisor {

    canal:string[] = ["Telefe","Fox Sport","America","Discovery"];
    canalEstado:boolean[] = [true,false,true,true];

    obtenerInfo(canalInfo:number){
     return this.canalEstado[canalInfo];
    }

    obtenerNombre(canalSel:number){
        return this.canal[canalSel];
    }

}