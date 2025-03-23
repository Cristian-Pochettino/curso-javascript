
//ABM   significa alta,baja,modificacion


const Producto = function( nombre,precio,stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}
let producto1= new Producto("lenovo",350000,20)
let producto2= new Producto("lg",350000,20)
let producto3= new Producto("apple",350000,20)
let producto4= new Producto("xiaomi",350000,20)

const lista = [producto1,producto2,producto3,producto4]

//-------------------0--------------------------

//filtrar los productos para poder modificarlos


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").trim().toUpperCase()
    let resultado = lista.filter( (x)=> x.nombre.toUpperCase().includes(palabraClave)  )

    if(resultado.length >0){ // si es mayor a 0, significa que al menos un resultado encontro
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}




function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto").trim();
    let precio = parseFloat(prompt("ingresa el precio del producto"));
    let stock = parseInt(prompt("ingresa el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){ //si los datos son erroneos o vacios capturo el error
    alert("por favor ingrese datos validos")
    return; // si no pongo que retorne, me guareda el producto como NAN
    }

    let producto = new Producto(nombre,precio,stock)
    lista.push(producto)
    console.table(lista)
}