

/* 
function sumar(num1,num2){
    return num1+num2
}

const resultado = sumar(2,5) */


/* 
const coche={
    marca:"toyota",
    modelo:"corolla",
    year: 2022,
    color: "rojo",

    arrancar: function(){
        console.log("el coche esta en marcha")
    },
    acelerar: function(){
        console.log("el coche esta acelerando")
    },
    frenar: function(){
        console.log("el coche esta frenando")
    }
}
 */



//   FOREACH--

//foreach(): ejecuta una funcion para cada elemento del array

/* const frutas = ["manzana","banana","pera","kiwi"]




frutas.forEach((x)=> console.log(x.toUpperCase()))

 */



//                   --MAP--

//Map()Crea un nuevo array con el resultado de llamar a una función para cada elemento del array.


/* 

const numeros = [1,2,3,4,5]

const doble = numeros.map(function(x){return x *2})


console.log(numeros)
console.log(doble)
 */







//                   --FIND--
/*           El método find se usa para buscar un elemento en un array que cumpla con cierta condición, 
          y devuelve el PRIMER elemento que cumple dicha condición. */




         /*  const numeros = [1,2,3,4,5,6,7,5,8,9,5,7,11,5]

          const encontrado = numeros.find ( (x)=> x >=65 )

          console.log(encontrado) */




         /*  --FILTER--
          filter(): Crea un nuevo array con todos los elementos que pasan una prueba especificada en una función. */

          /* const numeros = [1,2,3,4,5,6,7,5,8,9,5,7,11,5]

          const numerosPares = numeros.filter( function(numero){ return numero % 2===0} )

          console.log(numerosPares)
 */
        


          //reduce:



   /*        const preciosDePrendas= [15,65,89,32,21,56,78,54,23,69]
          preciosDePrendas.push(965)

          const precioFinal = preciosDePrendas.reduce((acc,val )=>acc + val)

          console.log(precioFinal) */



          //sort ordena los numeros de forma acendente

          /* const preciosDePrendas= [15,65,89,32,21,56,78,54,23,69]

          let precios =preciosDePrendas.sort(  (a,b)=> a-b)
          console.log(preciosDePrendas)

          precios.reverse() */



          
         