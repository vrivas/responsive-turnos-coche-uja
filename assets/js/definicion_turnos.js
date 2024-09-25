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