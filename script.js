function Producto (nombre, precio ,){
    this.nombre = nombre;
    this.precio = precio;
}

function total2(){
    let verTotal = document.getElementById("botonTotal")
    verTotal.innerText = "$ "+ acumulador+""
    console.log("total: "+acumulador)
}

const arrayCarrito = [];

let acumulador = 0;

const botonTote = document.getElementById("botonTote")

function añadido(nombre){
    alert(" "+ nombre +" a sido añadido al carrito")
}

botonTote.addEventListener("click",()=>{
    let nombre = "ToteNegra";
    let precio = 2000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    arrayCarrito.push(producto1)

    añadido()

    console.log(arrayCarrito)

    total2()

})

const botonBuzo = document.getElementById("botonBuzo")

botonBuzo.addEventListener("click",()=>{
    let nombre = "Buzo Bordado";
    let precio = 4000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    arrayCarrito.push(producto1)

    añadido()

    console.log(arrayCarrito)

    total2()

})

const botonRemera = document.getElementById("botonRemera")

botonRemera.addEventListener("click",()=>{
    let nombre = "Remera Bordada";
    let precio = 2000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    arrayCarrito.push(producto1)

    añadido()

    console.log(arrayCarrito)

    total2()

})

const botonCartuchera = document.getElementById("botonCartuchera")

botonCartuchera.addEventListener("click",()=>{
    let nombre = "Cartuchera bordada";
    let precio = 2500;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    arrayCarrito.push(producto1)

    añadido()

    console.log(arrayCarrito)

    total2()

})

const botonCuadro = document.getElementById("botonCuadro")

botonCuadro.addEventListener("click",()=>{
    let nombre = "Cuadro Bordado";
    let precio = 1700;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    arrayCarrito.push(producto1)

    añadido()

    console.log(arrayCarrito)

    total2()

})

const botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click",()=>{
    // let verTotal = document.getElementById("botonTotal")
    // verTotal.innerText = "$ "+ acumulador+""
    // console.log("total: "+acumulador)

})

