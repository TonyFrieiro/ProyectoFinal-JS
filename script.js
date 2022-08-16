
// class Producto{
//     constructor(id,nombre, precio ,img){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.img = img;
//     }
// }

// let botones =[]

// let carrito =[]

// // const producto1 = new Producto (1,"ToteNegra",2000,"/img/totenegra.webp")
// // const producto2 = new Producto (2,"BuzoBordado", 4000, "/img/buzoBordado.webp")
// // const producto3 = new Producto (3,"RemeraBordada",2200,"/img/remeraBordada.webp")
// // const producto4 = new Producto (4,"Cartuchera", 2500, "/img/cartuchera.webp")
// // const producto5 = new Producto (5,"CuadroBordado", 1700,"/img/cuadroBordado.webp")

// // const productos = [producto5,producto2,producto3,producto4,producto1]

// const contenedorArray = document.getElementById("contenedorArray")

// productos.forEach((producto) => {
//     contenedorArray.innerHTML += `
//         <div class="card">
//             <img class="card-img-top" src="${producto.img}" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">${producto.nombre}</h5>
//                 <p class="card-text">${producto.precio}</p>
//                 <a href="#" class="btn btn-primary" id="agregar${producto.id}" >Comprar</a>
//             </div>
//         </div>
    
//     `
//     let boton = document.getElementById(`agregar${producto.id}`)

//     botones.push(boton)


//     botones.forEach((boton)=>{
//         boton.addEventListener('click', () => {
//             //esta funcion ejecuta el agregar el carrito con la id del producto
//             agregarAlCarrito(producto.id)
//             //
//         })
//     })

// })

// const agregarAlCarrito = (prodId) => {
//     const item = productos.find((prod) => prod.id === prodId)
//     carrito.push(item)
//     console.log(carrito)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class Producto{
//     constructor(id,nombre, precio){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// const producto1 = new Producto (1,"ToteNegra",2000)
// const producto2 = new Producto (2,"BuzoBordado", 4000)
// const producto3 = new Producto (3,"RemeraBordada",2200)
// const producto4 = new Producto (4,"Cartuchera", 2500)
// const producto5 = new Producto (5,"CuadroBordado", 1700)

// const productos = [producto1,producto2,producto3,producto4,producto5]

// let boton = document.getElementsByClassName("calcular")
// var arr = Array.from(boton);
// console.log(arr)
// console.log(arr[1])

// function total2(){
//     let verTotal = document.getElementById("botonTotal")
//     verTotal.innerText = "$ "+ acumulador+""
//     console.log("total: "+acumulador)
// }
    
// const arrayCarrito = [];
    
// var valor = 0;
    
// let acumulador = 0;
    
// function añadido(){
//     nombre1 = Object.keys(arrayCarrito)
//     console.log(nombre1)
//     nombre2 = localStorage.getItem(nombre1)
//     Toastify({
//         text: "Producto "+nombre2+ " añadido",
//         duration: 3000,
//         newWindow: false,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #cbc571, #9e9c7d)",
//             color: "#000000"
//         },
//         onClick: function(){} // Callback after click
//     }).showToast();
// }

// boton.addEventListener('click', () => {
//     let idBoton = this.id
//     if(idBoton == botonTote){

//         arrayCarrito.push(producto1)

//         añadido(producto1)

//         console.log(arrayCarrito)

//         total2()

//         const enJSON = JSON.stringify(producto1);
//         localStorage.setItem(valor, enJSON);

//         valor = valor + 1

//         localStorage.setItem(valor, JSON.stringify(producto1));

//     }
//     else if(idBoton == botonBuzo){

//         arrayCarrito.push(producto2)

//         añadido(producto2)

//         console.log(arrayCarrito)

//         total2()

//         const enJSON = JSON.stringify(producto1);
//         localStorage.setItem(valor, enJSON);

//         valor = valor + 1

//         localStorage.setItem(valor, JSON.stringify(producto2));

//     }
//     else if(idBoton == botonRemera){

//         arrayCarrito.push(producto3)

//         añadido(producto3)

//         console.log(arrayCarrito)

//         total2()

//         const enJSON = JSON.stringify(producto3);
//         localStorage.setItem(valor, enJSON);

//         valor = valor + 1

//         localStorage.setItem(valor, JSON.stringify(producto3));
//     }
//     else if(idBoton == botonCartuchera){
//         arrayCarrito.push(producto4)

//         añadido(producto4)

//         console.log(arrayCarrito)

//         total2()

//         const enJSON = JSON.stringify(producto4);
//         localStorage.setItem(valor, enJSON);

//         valor = valor + 1

//         localStorage.setItem(valor, JSON.stringify(producto4));
//     }
//     else if (idBoton == botonCuadro){

//         arrayCarrito.push(producto5)

//         añadido(producto5)

//         console.log(arrayCarrito)

//         total2()

//         const enJSON = JSON.stringify(producto5);
//         localStorage.setItem(valor, enJSON);

//         valor = valor + 1

//         localStorage.setItem(valor, JSON.stringify(producto5));
//     }
//     else{
//         console.log("el id no existe")
//     }
// })


/////////////////////////////////////////////////////////////////////////////////////////////////////////

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

let precioTotal = 0

const desestructurar = (item) =>{                 //desestructuracion en parametros
    const {precio} = item
    precioTotal= precioTotal + precio
    console.log(precio)
    console.log(precioTotal)
}

function total2(){
    let verTotal = document.getElementById("botonTotal")
    verTotal.innerText = "$ "+ acumulador+""
    console.log("total: "+acumulador)
}

const arrayCarrito = [];

var valor = 0;

let acumulador = 0;

const botonTote = document.getElementById("botonTote")

function añadido(){
    nombre1 = Object.keys(arrayCarrito)
    console.log(nombre1)
    nombre2 = localStorage.getItem(nombre1)
    Toastify({
        text: "Producto "+nombre2+ " añadido",
        duration: 3000,
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #cbc571, #9e9c7d)",
          color: "#000000"
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

botonTote.addEventListener("click",()=>{
    let nombre = "ToteNegra";
    let precio = 2000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    desestructurar(producto1)

    arrayCarrito.push(producto1)

    añadido(producto1)

    console.log(...arrayCarrito)

    total2()

    //const enJSON = JSON.stringify(producto1);
    //localStorage.setItem(valor, enJSON);

    valor++

    localStorage.setItem(valor, JSON.stringify(producto1));

})

const botonBuzo = document.getElementById("botonBuzo")

botonBuzo.addEventListener("click",()=>{
    let nombre = "Buzo Bordado";
    let precio = 4000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    desestructurar(producto1)

    arrayCarrito.push(producto1)

    añadido()

    console.log(...arrayCarrito)

    total2()

    //const enJSON = JSON.stringify(producto1);
    //localStorage.setItem(valor, enJSON);
    valor++

    localStorage.setItem(valor, JSON.stringify(producto1));
})

const botonRemera = document.getElementById("botonRemera")

botonRemera.addEventListener("click",()=>{
    let nombre = "Remera Bordada";
    let precio = 2000;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    desestructurar(producto1)

    arrayCarrito.push(producto1)

    añadido()

    console.log(...arrayCarrito)

    total2()

    //const enJSON = JSON.stringify(producto1);
    //localStorage.setItem(valor, enJSON);
    valor++

    localStorage.setItem(valor, JSON.stringify(producto1));
})

const botonCartuchera = document.getElementById("botonCartuchera")

botonCartuchera.addEventListener("click",()=>{
    let nombre = "Cartuchera bordada";
    let precio = 2500;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    desestructurar(producto1)

    arrayCarrito.push(producto1)

    añadido()

    console.log(...arrayCarrito)

    total2()

    //const enJSON = JSON.stringify(producto1);
    //localStorage.setItem(valor, enJSON);
    valor++

    localStorage.setItem(valor, JSON.stringify(producto1));
})

const botonCuadro = document.getElementById("botonCuadro")

botonCuadro.addEventListener("click",()=>{
    let nombre = "Cuadro Bordado";
    let precio = 1700;
    acumulador = acumulador + precio

    const producto1 = new Producto (nombre, precio);

    desestructurar(producto1)

    arrayCarrito.push(producto1)

    añadido()

    console.log(...arrayCarrito)

    total2()

    //const enJSON = JSON.stringify(producto1);
    //localStorage.setItem(valor, enJSON);
    valor++

    localStorage.setItem(valor, JSON.stringify(producto1));
})

const botonCarrito = document.getElementById("botonCarrito")

botonCarrito.addEventListener("click",()=>{
    // let verTotal = document.getElementById("botonTotal")
    // verTotal.innerText = "$ "+ acumulador+""
    // console.log("total: "+acumulador)
    localStorage.clear()
    acumulador = 0
    total2()
    Toastify({
        text: "Carrito vaciado",
        duration: 3000,
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #862222, #191828)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

})