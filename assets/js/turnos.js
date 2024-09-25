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
    this.lugar = _lugar || "Albolote";
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

// Constantes para los días de la semana
var C_LUNES = 1;
var C_MARTES = 2;
var C_MIERCOLES = 3;
var C_JUEVES = 4;
var C_VIERNES = 5;
var C_NO_DIA = -1 // Util para asignárselo a turnos que desaparecen al ppio del cuatrimestre pero cuando están ya todos los demás turnos asignados; es decir, evita renumerar todos los turnos cuando uno desaparece.

// Definición de los turnos
let nTurno = 1;
/*
Lunes: 
Nacho: 07:30-12:30
Víctor: 09:15-18:30 (Ángel: Algunos lunes tengo clase hasta las 19:30.Si te puedes esperar me apunto en el turno)
Estefanía: 8.30- 14.30h

Lunes: 
Nacho: 07:30-12:30 (Nacho: a partir del 23 de septiembre)
Víctor: 09:15-18:30 (Ángel: Algunos lunes tengo clase hasta las 19:30.Si te puedes esperar me apunto en el turno)
Estefanía, Alfonso, Lidia: 8.30- 14.30h (a partir del 16 de septiembre)
David: 8:30-17:30 


*/
T.push( new Turno(C_LUNES, nTurno++, "07:30", "12:30", [C_NACHO] )
            .addComentarios( "Nacho: a partir del 23 de septiembre" ))
T.push( new Turno(C_LUNES, nTurno++, "09:15", "18:30", [C_VICTOR] ))
T.push( new Turno(C_LUNES, nTurno++, "08:30", "17:30", [C_DAVID] ))


/*
MARTES
Susana: 8:15-13:30 (hasta 12 noviembre, después salida de Jaén  12,30)
Inma, Estefanía: 8:30 - 14:30
Paco Luis: 8.30 –19:30
Ángel: 15:30-19:30
Jose Alberto: 8:30-17:30  (salida flexible)

*/
T.push( new Turno(C_MARTES, nTurno++, "08:15", "13:30",  [C_SUSANA] )
    .addComentarios( "hasta 12 noviembre, después salida de Jaén  12,30" ))
T.push( new Turno(C_MARTES, nTurno++, "08:30", "14:30", 
    [C_SIN_TURNO, C_INMA_BARROSO, C_ESTEFANIA, C_GUSTAVO] ).setContador(0));
T.push( new Turno(C_MARTES, nTurno++, "08:30", "20:30", 
    [ C_ANGEL, C_JMF,  C_PACO_LUIS, C_ANTONIO] ))
T.push( new Turno(C_MARTES, nTurno++, "--:--","--:--", [C_SIN_TURNO] )
    .cancelar("10-sep-2024"));
T.push( new Turno(C_MARTES, nTurno++, "08:30", "17:30", [C_J_ALBERTO] )
    .addComentarios( "salida flexible" ))
/*
Miércoles:

Susana: 8,15- 13,30 (a partir del 20 de octubre, salida de Jaén 12,30)
Inma, Alfonso: 8:30 - 14:30
Víctor: 15:30-19:30
Paco Luis, José Manuel: 8.30 –19:30
Estefanía: 7.30-14.30 (a partir del 18 de septiembre)
David, Gustavo: 8:30-17:30
Antonio: 9:30-21:30


*/
T.push( new Turno(C_MIERCOLES, nTurno++, "08:15", "13:30", [C_SUSANA] )
    .addComentarios( "a partir del 20 de octubre, salida de Jaén 12,30" ))
T.push( new Turno(C_MIERCOLES, nTurno++, "08:30", "14:30", 
    [C_INMA_BARROSO, C_ALFONSO] ))
T.push( new Turno(C_MIERCOLES, nTurno++, "12:00", "19:30", [C_VICTOR] ))
T.push( new Turno(C_MIERCOLES, nTurno++, "08:30", "19:30",[C_PACO_LUIS, C_JMF] ))
T.push( new Turno(C_MIERCOLES, nTurno++, "08:30", "17:30", [C_DAVID, C_GUSTAVO] ))
T.push( new Turno(C_MIERCOLES, nTurno++, "09:30", "21:30", [C_ANTONIO] ))


/*
Jueves:
Nacho: 9:30-17:30
Lidia: 8:30-14:30 
Víctor, Ángel: 15:30-19:30 (o un poco más tarde si es necesario) 
José Manuel, Antonio: 8.30 –19:30


*/

T.push( new Turno(C_JUEVES, nTurno++, "09:30", "17:30", [C_NACHO] ))
T.push( new Turno(C_JUEVES, nTurno++, "08:30", "14:40", [C_LIDIA] ))
T.push( new Turno(C_JUEVES, nTurno++, "15:30", "19:30", [C_VICTOR, C_ANGEL] ))
T.push( new Turno(C_JUEVES, nTurno++, "08:30", "19:30", [C_JMF, C_ANTONIO] ))


/*
Viernes:

Nacho: 12:30-17:30
Ángel: 15:30-20:30 (Hasta el 26 de octubre. A partir del 8 de noviembre de 9:30 a 20:30, aunque podría salir por la mañana todo el cuatrimestre)
Lidia: 9:00h - 14:30 (flexibles)

*/
T.push( new Turno(C_VIERNES, nTurno++, "12:30", "17:30", [C_NACHO] ))
T.push( new Turno(C_VIERNES, nTurno++, "15:30", "20:30", [C_ANGEL] )
    .addComentarios( "Hasta el 26 de octubre. A partir del 8 de noviembre de 9:30 a 20:30, aunque podría salir por la mañana todo el cuatrimestre" ))
T.push( new Turno(C_VIERNES, nTurno++, "09:00", "14:30", [C_LIDIA] )
    .addComentarios( "Horarios flexibles" ))