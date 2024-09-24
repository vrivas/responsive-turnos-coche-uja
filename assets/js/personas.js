/// Vector de Personaes
var P = [];
/**
 * Clase Persona
 */

function Persona(_nombre, _correo) {
    this.nombre = _nombre;
    this.correo = _correo;
    this.conducciones = [];
    this.activo = false;
    /**
       * Método que se invoca cada vez que tiene que conducir
       * @return El nombre que ha de poner en la página web
       */
    this.conduce = function (_fecha, _turno) {
        this.conducciones.push({
            "fecha": new Date(_fecha)
            , "turno": _turno
        });
        this.activo = true;
        return this.nombre;
    }

    // Añado el nuevo objeto al vector de nombres
    P.push(this);

    // Ordeno el vector
    P.sort(function (a, b) {
        return (a.nombre > b.nombre ? 1 : (a.nombre == b.nombre) ? 0 : -1);
    });
}


// ordenados por nombre de variable C_XXXX
var C_ALBA = new Persona("Alba de la Cruz", "aredondo@ujaen.es");
var C_ALFONSO = new Persona("Alfonso", "aontiver@ujaen.es");
var C_ALINA = new Persona("Alina", "adanet@ujaen.es");
var C_ANGEL = new Persona("Angel", "angel@ujaen.es");
var C_ANGELES = new Persona("Angeles", "aaguero@ujaen.es");
var C_ANTONIO = new Persona("Antonio", "ajrueda@ujaen.es");

var C_ANTONIO_CEPEDA = new Persona("Antonio Cepeda", "acepeda@uvm.edu");

var C_ANYELY = new Persona("Anyely", "anyely_1986@hotmail.com")
// var C_CARLOS_MOLINA = new Persona("Carlos Molina", "carlosmo@ujaen.es");
//var C_CARLOS_PORCEL   = new Persona( "Carlos Porcel","cporcel@ujaen.es" );
var C_CARMEN = new Persona("Carmen Martínez", "cmcruz@ujaen.es");
var C_CARMEN_RUIZ = new Persona("Carmen Ruiz", "crepullo@ujaen.es");

var C_CRISTINA_RGUEZ = new Persona("Cristina Rodríguez", "crodri@ujaen.es");
var C_DAVID = new Persona("David", "dpozo@ujaen.es");
var C_DIANA = new Persona("Diana", "damber@ujaen.es");

var C_ENCARNI = new Persona("Encarni", "equesada77@hotmail.com");

var C_ESTEFANIA = new Persona("Estefanía", "evaldivi@ujaen.es");
var C_FRAN_BARROS = new Persona("Fran Barros", "fbarros@ujaen.es");
var C_GEMA = new Persona("Gema", "gtluque@ujaen.es");
var C_GUSTAVO = new Persona("Gustavo", "greyes@ujaen.es");
var C_INMA_BARROSO = new Persona("Inma Barroso", "ibarroso@ujaen.es");
var C_INMA_GARCIA = new Persona("Inma Garcia", "igmartin@ujaen.es");
var C_J_ALBERTO = new Persona("José Alberto", "jamoleon@ujaen.es");
var C_JAVIER = new Persona("Javier Pérez", "jppadill@ujaen.es");
var C_JMF = new Persona("José Manuel", "jmf@ujaen.es");
var C_JOAQUIN = new Persona("Joaquin", "jjodar@ujaen.es");
var C_JORGE_CASTRO = new Persona("Jorge Castro", "jcastro@ujaen.es");
var C_JOSEMA = new Persona("José María", "jschica@ujaen.es");
var C_JUAN_FRANCISCO = new Persona("Juan Francisco", "jfruiz@ujaen.es");
//var C_JUAN            = new Persona( "Juan" , "demiras@ujaen.es" );
var C_LAURA_RUBIO = new Persona("Laura Rubio", "lrubio@ujaen.es");
var C_LAURA_MICCOLI = new Persona("Laura M.", "lmiccoli@ujaen.es");


var C_LIDIA = new Persona("Lidia", "lidia@ujaen.es");
var C_M_CRUZ = new Persona("Mari Cruz", "mcgarcia@ujaen.es");
var C_MARIA_ESPINOSA = new Persona("María Espinosa", "mespinos@ujaen.es");
var C_MAYCA = new Persona("Mayca", "mcmartin@ujaen.es");
var C_MONICA = new Persona("Mónica", "mtrivino@ujaen.es");
var C_NACHO = new Persona("Nacho", "nacho@ujaen.es");
var C_PACO_ARROYO = new Persona("Paco Arroyo", "fjarroyo@ujaen.es");
var C_PACO_BALDAN = new Persona("Paco Baldán", "fbaldan@ujaen.es");
var C_PACO_LUIS = new Persona("Paco Luis", "flrodri@ujaen.es");
var C_PACO_ROCA = new Persona("Paco Roca", "froca@ujaen.es");
var C_PACO_RUIZ = new Persona("Paco Ruíz", "jfruiz@ujaen.es");

var C_PAZ = new Persona("Paz", "mpelipe@ujaen.es");
var C_PILAR = new Persona("Pilar", "psanchez@ujaen.es");
var C_RAFAEL = new Persona("Rafael", "rmoreno@ujaen.es");
var C_SILVIA = new Persona("Silvia", "smoreno@ujaen.es");
var C_SUSANA = new Persona("Susana", "suruiz@ujaen.es");
var C_VICENTE = new Persona("Vicente", "vlara@ujaen.es");
var C_VICTOR = new Persona("Victor", "vrivas@ujaen.es");
var C_VIRGINIA = new Persona("Virginia", "virginiacapote@gmail.com");

var C_CANCELADO = new Persona("Cancelado", "cancelado");
var C_NO_OPERATIVO = new Persona("No_operativo", "no_operativo");
var C_SIN_TURNO = new Persona("Jornada sin turno", "");