
//if (condicional){cuerpo de condicional}
/* 
let nombre = prompt("ingresa tu nombre por favor").trim()
let apellido = prompt("ingresa tu apellido")

if(apellido == " "){
    alert("ingresa un apellido para continuar")
}else{

    if(nombre === "vicente" && apellido==="perez"){
        alert("hola corazoncito de mi vida")
    }else if(nombre == "joaquin"){
        alert("hola joaquin, que no se entere adolfo de lo nuestro")
    }else if(nombre === "vicente" && apellido ==="viloni"){
        alert("vicente, ya hablamos de esto, no puede ser lo nuestro")
    }else{
        alert("hola, estoy soltero")
    }



}



 */



/* let nombreIngresado   = prompt("Ingresar nombre");

if(         (nombreIngresado !="")          && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
 */





/* 
producto
precio base
oferta de mi cliente */

alert("vendo algo, escucho ofertas")
let ofertaBase = 2000
let ofertaDelUsuario = parseFloat(prompt("ingresa tu oferta: ")) 
if(ofertaDelUsuario < 1000){
    alert("sos un rata de miercoles, anda pa alla bobo")
}else if(ofertaDelUsuario <2000 && ofertaDelUsuario >= 1500){
    alert("yyyyy, estirate un poco mas y hablamos")
}else if(ofertaDelUsuario >=1000 && ofertaDelUsuario < 1500){
    alert("tu no entiendes, verdad?")
}else if(ofertaDelUsuario >=2000){
    alert("te lo llevo sin cargo")
}else{
    alert("mira pedazo de humano hermoso, te pedi una oferta en plata. poneme un numerito ahi en el cartelito")
}