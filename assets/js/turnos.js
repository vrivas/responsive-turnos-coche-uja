// VEctor de Turnos
var T = [];

// Clase Turno
function Turno(
    _dia
    , _numTurno
    , _hora_gr
    , _hora_j
    , _profesores    
    , _lugar
    , _fechaInicio
    , _fechaFin
) {
    this.dia = _dia;
    this.numTurno= _numTurno;
    this.hora_gr = _hora_gr;
    this.hora_j = _hora_j;
    this.lugar = _lugar || "";
    this.comentarios = [];
    this.profesores = _profesores || [];
    this.profesores.forEach(p => p.activo = true);
    this.correos = this.profesores.map( p => p.correo ).join(", ");
    this.fechaInicio = _fechaInicio || cuatrimestre.inicio;
    this.fechaFin = _fechaFin || cuatrimestre.fin;
    this.contador = this.profesores.length>0?this.numTurno%this.profesores.length:0;
    this.desdoblarSi5 = false;
    this._primeraMuestra = false;
    this.nuevo = true
    this.cambio = false
    this.activo = true
    this.addComentarios = function (_comentario) {
        this.comentarios.push(_comentario);
        return this;
    }
    this.setContador = function (_contador) {
        this.contador = _contador;
        return this;
    }
    this.incrementaContador = function () {
        this.contador++;
        this.contador = this.contador % this.profesores.length;
        return this;
    }
    this.cancelar = function (_comentario) {
        this.activo = false;
        this.comentarios.push("Cancelado el : "+_comentario);
        return this;
    }

    this.comienza = function (_fecha) {
        this.fechaInicio = _fecha;
        return this;
    }
    this.finaliza = function (_fecha) {
        this.fechaFin = _fecha;
        return this;
    }

    // Devuelve la información del turno para un día concreto
    // Actualiza el contador
    // Actualiza si el conductor ha conducido o no
    // Actualiza si hay cambios o no
    this.getInfoParaDia = function() {
        if( !this.activo ) return null;
        let info = {
            "numTurno": this.numTurno
            , "hora_gr": this.hora_gr
            , "hora_j": this.hora_j
            , "conductor": this.profesores[this.contador].nombre
            , "acompanantes": this.profesores.slice(0,this.contador).concat(this.profesores.slice(this.contador+1)).map( p => p.nombre )
            , "lugar": this.lugar
            , "comentarios": this.comentarios
            , "desdoblarSi5": this.desdoblarSi5
            , "nuevo": this.nuevo
            , "cambio": this.cambio
            , "contador": this.contador
            , "correos": this.correos
        }

        this.incrementaContador();
        this.nuevo = false;
        this.cambio = false;
        return info;
    }   
}

function infoTurnoToDiv(info) {
    if( info==null ) return "";
    let msj="";
    let clasesInfoTurno=["info-turno"];
    let divNumTurno=`<div class='num-turno'>${cerear(info.numTurno)}</div>`;
    let divNuevo=info.nuevo?"<div class='etiqueta-nuevo'>N</div>":"";
    let divCambio=info.cambio?"<div class='etiqueta-cambio'>M</div>":"";
    let spanLugar=(info.lugar)?`<span class="lugar">${info.lugar}</span><br/>`:"";
    let divHorario=`<div class='horario'>${spanLugar}↑ ${info.hora_gr}-${info.hora_j} ↓</div>`;
    let spanConductor=`<span class="nombre-conductor">${info.conductor}</span>`;
    let spanAcompanantes=info.acompanantes.length>0?`<span class="nombres-acompanantes">(${info.acompanantes.join(", ")})</span>`:"";
    let divPersonas=`<div class='personas'>
            ${spanConductor}
            ${spanAcompanantes}
        </div>`;
    // clases aplicables al día
    clasesInfoTurno=clasesInfoTurno.join(" ");
    return `<div class='${clasesInfoTurno}'>
        <div class='numero-y-cambios'>
            ${divNumTurno}
            ${divNuevo}
            ${divCambio}
        </div>
        <div class='horas-y-personas'>
            ${divHorario}
            ${divPersonas}
        </div>
    </div>`
}

// Constantes para los días de la semana
const C_LUNES = 1;
const C_MARTES = 2;
const C_MIERCOLES = 3;
const C_JUEVES = 4;
const C_VIERNES = 5;
const C_NO_DIA = -1 // Util para asignárselo a turnos que desaparecen al ppio del cuatrimestre pero cuando están ya todos los demás turnos asignados; es decir, evita renumerar todos los turnos cuando uno desaparece.

// Definición de los turnos
let nTurno = 1;
