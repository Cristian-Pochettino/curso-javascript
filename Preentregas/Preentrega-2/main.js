userfunction addprod(){
    let nombre = prompt("ingrese el nombre del producto").trim();
    let precio = parseFloat(prompt("ingrese el precio del producto"))
    let stock = parseInt(prompt("ingrese el stock del producto"))

}

const Producto = function (nombre, precio,stock){
    this.nombre = nombre
    this.precio= precio
    this.stock = stock
}
let producto = new Producto("lenovo",350000,20)
let producto = new Producto("apple",10000,20)
let producto = new Producto("hp",320000,20)
let producto = new Producto("lg",250000,20)

const lista = [producto,producto2,producto3,producto4]

function filtrarProductos(){
    let palabraClave = prompt("ingrese el producto buscado").trim().toUpperCase()
    let resultado = lista.filter ( (x)=> x.nombre.toUpperCase().includes(palabraClave) )
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}