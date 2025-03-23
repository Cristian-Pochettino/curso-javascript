

/* 

const frutas = ["manzana", "banana", "pera","sandia"]
//indice            0          1        2       3

frutas[3] = "kiwi"



let frutaPreferida = frutas[3]

alert(frutaPreferida)
 */


/* 
const numero1=[1,2,3,4]   
const numero2=[5,6,7,8]   

console.log(numero1[2]+numero2[1]) */


/* const numeros=[1,2,3,4]

for(let i =0 ; i<5; i++){
    console.log(numeros[i])
}
 */



 //               --LENGTH--

 //length(): cuenta la cantidad de propiedades que hay en el array

 //const frutas = ["manzana", "banana", "pera","sandia",]

/* const preciosTermos = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i< preciosTermos.length; i++){
    console.log(preciosTermos[i])
} */


//                 --PUSH--

//push():agrega un elemento al FINAL del array

/* const frutas = ["manzana", "banana", "pera","sandia"] */



/* console.log(frutas) */


//                  --POP--
//pop(): elimina el ultimo elemento del array

/* frutas.pop()

console.log(frutas)
 */

//                  --SHIFT--

//  shift(): elimina el primer elemento del array

/* 
frutas.shift()
console.log(frutas) */


//                  --UNSHIFT--
//  unshift(): agrega al primer elemento del array

/* frutas.unshift("mandarina")

console.log(frutas) */



//slice() retorna una copia del array y usa parametros (desde , hasta < al numero)


/* const frutas = ["manzana", "banana", "pera","sandia"] */
/* 
const copia= frutas.slice(0,2)

console.log(copia) */


//splice(): cambia el contenido del array eliminando elementos y reemplazandolos
//SI TOMA EL ULTIMO PARAMETRO

/* const frutas = ["manzana", "banana", "pera","sandia"]

const fruta = frutas.splice(0,2) */


//concat(): une 2 o mas array

/* const perros =["puqui", "negrito", "manchita"]
const gatos = ["salem", "mishi", "garfield"]
const mascotas = perros.concat(gatos)
console.log(mascotas) */


//join(): une todos los elementos en un array completo

/* const frutas = ["manzana", "banana", "pera","sandia"]

const cadena = frutas.join("||")

console.log(cadena) */


//indexOf(): retorna la posicion de un elemento especifico en el array
//si el elemento no existe, muestra -1

//const frutas = ["manzana", "banana", "pera","sandia"]
/* 
const posicion = frutas.indexOf("pera")

console.log(posicion)

if(posicion == -1){
    alert("no se encuentra coincidencia")
}
if (posicion != -1){
    alert("bancame que ya te paso los datos")
} */


//includes():me permite saber si el elemento que recibo por parametro existe o no en el array
// retorna un valor booleano



/* const nombres=["gregorio","javier","juan"]

console.log(nombres.includes("gregorio")  ) */


const nombres =[
    {nombre:"javier",
     ciudad: "mar del plata",
     edad: 89},
     {nombre:"daniel",
     ciudad: "medellin",
     edad: 32},
     {nombre:"anto",
     ciudad: "bs as",
     edad: 19,}
]
//for(variable of iterable)
for(x of nombres){
    console.log(x.nombre + " vive en " + x.ciudad)
}