/// Genera los días del cuatrimestre
let D=[];

// Objeto Dia
function Dia( fecha ) {
    this.fecha = fecha;
    this.turnos = [];
    this.addTurno = function( turno ) {
        this.turnos.push(turno);
        return this;
    }
    this.festivo=null;
}

function esNoLectivo( unaFecha ) {
    // Comprobamos si es festivo
    for( let f of cuatrimestre.festivos ) {
        if( comparaFechas(f.inicio, unaFecha)==0 ) {
            return f.nombre;
        }

        if ( (f.fin!=null && comparaFechas(f.inicio,unaFecha)<=0 &&
            comparaFechas(f.fin,unaFecha)>=0) ) {
            return f.nombre;
        }
        
    }
    // Comprobamos si es sábado o domingo
    if( unaFecha.getDay()==0 || unaFecha.getDay()==6 ) {
        return "Fin de semana";
    }
    return null;
}

function rellenaDias() {
    let d=new Date( cuatrimestre.inicio);
    while( d<=cuatrimestre.fin ) {
        let dia=new Dia( new Date(d) );

        // En primer lugar, comprobamos si es no lectivo
        dia.festivo=esNoLectivo(d);
        D.push( dia);
        d.setDate(d.getDate()+1);
    }
}


rellenaDias();