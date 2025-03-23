

//estructura del FOR

//desde,hasta,actualizacion



/* for(let i=0;i<5;i++){ 

    console.log("seba agrego " + i + " al stock")
}
 */


//break
//continue






/* for(let i=0; i<10;i++){

    if(i === 2018 || i ===2019){
        continue
    }

    console.log("contando "+ i)
}
 */


/* let iterar = true

while( iterar === true){
    console.log("imprimo un mensaje desde el while")
    iterar = confirm("desea continuar?")
} */



//do while


/* let contador = 4
do{
    console.log("el valor del contador es " + contador)
}while(contador <5)
 */



let intentos = 1
let identificar =true
do{
    let usuario = prompt("ingrese su usuario")
    if(usuario === null){
        break
    }
    if(usuario === "adolfo piña" && intentos <=3){
        alert("bienvenido adolfo")
        identificar = false
    }else{
        alert("no reconozco el usuario")
        intentos++
        if(intentos > 3){
            alert("usted supero los 3 intentos")
            break
        }
    }
}while(identificar)