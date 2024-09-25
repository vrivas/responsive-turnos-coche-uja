function listarDias(){
    let div=document.getElementById("main");
    div.innerHTML="<h1>Turnos de coche UJA</h1>";
    D.forEach( d => {
        let h2=document.createElement("h2");
        h2.innerHTML=d.fecha.toLocaleDateString();
        div.appendChild(h2);
        if( d.festivo!=null ) {
            let p=document.createElement("p");
            p.innerHTML=d.festivo;
            div.appendChild(p);
        } else {
            let ul=document.createElement("ul");
            d.turnos.forEach( t => {
                let li=document.createElement("li");
                li.innerHTML=t;
                ul.appendChild(li);
            });
            div.appendChild(ul);
        }
    });
    
}




listarDias();