function listarDias(){
    let div=document.getElementById("main");
    div.innerHTML="<h1>Turnos de coche UJA</h1>";
    let msj="";
    D.forEach( d => {
        msj+=d.toDiv()+"\n";
    });
    div.innerHTML+=msj;
    
}




listarDias();