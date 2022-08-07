function Producto (nombre, precio ,){
    this.nombre = nombre;
    this.precio = precio;
}

let pagarTotal = 0;

function total(precio){
    (parseFloat(precio))
    pagarTotal = pagarTotal + precio
}

const arrayCarrito = [];

const botonTote = document.getElementById("botonTote")

function añadido(nombre){
    alert(" "+ nombre +" a sido añadido al carrito")
}

botonTote.addEventListener("click",()=>{
    let nombre = "ToteNegra";
    let precio = 2000;

    const prodcuto1 = new Producto (nombre, precio);

    arrayCarrito.push(prodcuto1)

    añadido()

    console.log(arrayCarrito)

    total();
})

const botonBuzo = document.getElementById("botonBuzo")

botonBuzo.addEventListener("click",()=>{
    let nombre = "Buzo Bordado";
    let precio = 4000;

    const prodcuto1 = new Producto (nombre, precio);

    arrayCarrito.push(prodcuto1)

    añadido()

    console.log(arrayCarrito)

    total();
})

const botonRemera = document.getElementById("botonRemera")

botonRemera.addEventListener("click",()=>{
    let nombre = "Remera Bordada";
    let precio = 2000;

    const prodcuto1 = new Producto (nombre, precio);

    arrayCarrito.push(prodcuto1)

    añadido()

    console.log(arrayCarrito)

    total();
})

const botonCartuchera = document.getElementById("botonCartuchera")

botonCartuchera.addEventListener("click",()=>{
    let nombre = "Cartuchera bordada";
    let precio = 2500;

    const prodcuto1 = new Producto (nombre, precio);

    arrayCarrito.push(prodcuto1)

    añadido()

    console.log(arrayCarrito)

    total();
})

const botonCuadro = document.getElementById("botonCuadro")

botonCuadro.addEventListener("click",()=>{
    let nombre = "Cuadro Bordado";
    let precio = 1700;

    const prodcuto1 = new Producto (nombre, precio);

    arrayCarrito.push(prodcuto1)

    añadido()

    console.log(arrayCarrito)

    total();

})

const botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click",()=>{
    let verTotal = document.getElementById("botonTotal")
    console.log(verTotal.innerText)
    verTotal.innerText = "$ "+ pagarTotal+""
})