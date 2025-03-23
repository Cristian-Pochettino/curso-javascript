

// console.log(Math) me muestra en consola los metodos del objeto

//console.log(Math.PI) muestra el valor de pi (estatico, no cambia)

//console.log(Math.abs(-7.8)) devuelve el valor absoluto sin +/-(pos-neg)

//console.log(Math.ceil(7.2)) devuelve el numero redondeado hacia arriba

//console.log(Math.floor(7.9))  devuelve el numero redondeado hacia abajo

//console.log(Math.round(7.5)) devuelve el num3ero redondeado al mas cercano

//console.log(Math.pow(2,5)) devuelve la potencia (2 elevado a la 5ta)

//console.log(Math.max(15,35,9854,2,3,7,618)) devuelve el mas alto

//console.log(Math.min(15,35,9854,2,3,7,618,-98)) devuelve el mas bajo

//console.log(Math.sqrt(80)) devuelve raiz cuadrada

//console.log(  Math.floor(     Math.random() *30 -20     )     )




/* console.log( new Date()) */


const tiempo =  new Date()

console.log(tiempo)



/* 

año (4 digitos)
mes (0-11)
dias del mes (1-31)
hora (0-23)
minutos (0-59)
segundos (0-59)
milesimas (0-999)
*/

/* const fecha = new Date()

console.log(fecha)

const year = fecha.getFullYear()
const mes = fecha.getMonth()+1
const dia = fecha.getDate() //DIA DEL MES
const diaSemana = fecha.getDay() //DIA DE LA SEMANA


console.log(`la fecha actual es ${dia}/${mes}/${year}`) */




/* const hoy = new Date()

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina) */


const inicio = new Date()

for (let i = 0; i < 1000; i++) {
    console.log("haciendo tiempo")
}

const final = new Date()

console.log("El proceso tardó: " + (final - inicio) + " milisegundos")
// El proceso tardó: 396 milisegundos