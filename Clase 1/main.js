
//palabra reservada, nombre, dato a almacenar
/* 
let nombre = "javier"

const pi = 3.14



"45"   String
45  Number

 */
/* 


let numero1 = parseFloat(prompt("ingrese el primer numero"))
let numero2 =  parseFloat(prompt("ingrese el segundo numero")) //el parse convierte cualquie string (que se pueda) a un entero


let resultado = numero1+numero2

alert(resultado)
 
console.log(resultado)
 */


let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
alert(`bienvenido al sistema ${nombre.toLowerCase()}, me entere que tu apellido es ${apellido.toLowerCase()}`)






// = asignacion             let numero = 1

// == comparo valores       1=="1"  true

//=== comparo valores y tipo de dato  1==="1"  false




console.log(`bienvenido al sistema ${nombre.toLowerCase}, me entere que tu apellido es ${apellido}`)
console.error(`bienvenido al sistema ${nombre.toLowerCase()}, me entere que tu apellido es ${apellido}`)
console.warn(`bienvenido al sistema ${nombre}, me entere que tu apellido es ${apellido}`)