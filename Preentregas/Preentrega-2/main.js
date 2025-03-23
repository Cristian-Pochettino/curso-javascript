function IngresarUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre por favor");

    if (nombreUsuario == "") {
        alert("Disculpe, ingrese su nombre de usuario nuevamente");
    } else {
        alert("Bienvenido a presupuesto de diseño MAARQ " + nombreUsuario);
    }
}

const presupuesto = function(inmueble, presupuesto, metros) {
    this.inmueble = inmueble;
    this.presupuesto = presupuesto;
    this.metros = metros;
}

let inmueble1 = new presupuesto("casa", 1500000, 400);
let inmueble2 = new presupuesto("departamento", 700000, 200);
let inmueble3 = new presupuesto("monoambiente", 400000, 50);
let inmueble4 = new presupuesto("terreno", 3000000, 800);

const listado = [inmueble1, inmueble2, inmueble3, inmueble4];

function BusquedaInmueble() {
    let palabraClave = prompt("Ingrese el inmueble deseado").trim().toUpperCase();
    let resultado = listado.filter((x) => x.inmueble.toUpperCase().includes(palabraClave));

    if (resultado.length > 0) {
        console.table(resultado);
        solicitardatos(resultado);
    } else {
        alert("No se encontró el inmueble deseado");
    }
}

function solicitardatos(resultado) {
    let eleccion = prompt("¿Desea realizar revisiones? Ingrese sí/no").toLowerCase();

    if (eleccion === "si") {
        let nombredelInmueble = prompt("Ingrese el inmueble a reformar").trim();
        let InmuebleElegido = resultado.find(inmueble => inmueble.inmueble.toLowerCase() === nombredelInmueble.toLowerCase());

        if (InmuebleElegido) {
            let cuotas = 12;
            let planmensual = InmuebleElegido.presupuesto / cuotas;
            alert(`El costo de la reforma para ${InmuebleElegido.inmueble} es ${InmuebleElegido.presupuesto}. El plan de pago es ${planmensual} en un plazo de ${cuotas} cuotas.`);
        } else {
            alert("No se encontró el inmueble elegido.");
        }
    } else if (eleccion === "no") {
        alert("Muchas gracias por elegir nuestro servicio de arquitectura.");
    } else {
        alert("Disculpe, la respuesta no es válida. Vuelva a intentarlo.");
    }
}

IngresarUsuario();
BusquedaInmueble();
