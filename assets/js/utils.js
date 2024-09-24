function fecha( dia, mes, anio) {
    return new Date(anio, mes-1, dia)
}
Date.prototype.toComparableString = function() {
    let year=this.getFullYear();
    let month=this.getMonth()+1;
    let day=this.getDate();
    return year+""+
           (month<10?"0"+month:month)+""+
           (day<10?"0"+day:day);
}

function comparaFechas( fecha1, fecha2 ) {
    let toRet=0;
    if( fecha1.toComparableString() < fecha2.toComparableString() ) toRet=-1;
    if( fecha1.toComparableString() > fecha2.toComparableString() ) toRet=1;
    return toRet;
}