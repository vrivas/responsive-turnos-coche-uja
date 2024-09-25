const NOMBRE_MESES_3_LETRAS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]; 
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

Date.prototype.toDD_MMM_YYY = function() {
    let year=this.getFullYear();
    let month=this.getMonth()+1;
    let day=this.getDate();
    return day+"-"+NOMBRE_MESES_3_LETRAS[month]+"-"+year;
}
Date.prototype.toDD_MMM = function() {
    let tmp=this.toDD_MMM_YYY();
    return tmp.substring(0,tmp.length-5);
}

function comparaFechas( fecha1, fecha2 ) {
    let toRet=0;
    if( fecha1.toComparableString() < fecha2.toComparableString() ) toRet=-1;
    if( fecha1.toComparableString() > fecha2.toComparableString() ) toRet=1;
    return toRet;
}