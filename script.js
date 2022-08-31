// const botonesAgregarAlCarrito = document.querySelectorAll('.agregarBoton')

// botonesAgregarAlCarrito.forEach(botonAgregar =>{
//     botonAgregar.addEventListener('click',(agregarClick))
// })


// function agregarClick(event){
//     const boton = event.target;
//     const card = boton.closest(".card")
    
//     const cardTitle = card.querySelector(".card-title").textContent
//     const cardPrice = card.querySelector(".card-price").textContent
//     const cardImg = card.querySelector(".card-img-top").src

//     alerta(cardTitle)
    
//     agregarCardAlCarrito(cardTitle,cardPrice,cardImg)
// }

// const contenedorCarrito = document.getElementById("carrito")

// function agregarCardAlCarrito(cardTitle,cardPrice,cardImg){
//     console.log(cardTitle,cardPrice,cardImg)

//     carrito.innerHTML +=  `<li class= "carritoCard"><p class= "carritoCardTitulo"> ${cardTitle}</p><p class= "carritoCardPrecio"> $ ${cardPrice}</p><p class= "carritoCardImg"> <img src="${cardImg}"width = "50" height = "50"</p><button class="botonBorrar btn btn-danger">Borrar</button></li> `

//     //const carritoRow = document.createElement("li")

//     //const carritoContenido = 


//     const botonBorrar = document.querySelectorAll(".botonBorrar")
    
//     botonBorrar.forEach(botonB => {addEventListener('click',(removerCardCarrito))} )



//     actualizarTotal()

// }

// function actualizarTotal(){
//     let total = 0
//     const carritoTotal = document.getElementById("total")
    
//     const carritoCards = document.querySelectorAll(".carritoCard")
    
//     carritoCards.forEach(carritoCard =>{
//         const carritoCardPrecioElemento = carritoCard.querySelector(".carritoCardPrecio")
//         const carritoCardPrecio = Number(carritoCardPrecioElemento.textContent.replace("$",""))
        
//         total = total + carritoCardPrecio
//     })

//     carritoTotal.innerHTML =`<p class="text-right">Total: ${total} <span></span>;</p>`

// }
// function removerCardCarrito(event){
//     console.log("clicked")
// }























// function alerta(cardTitle){
//     Toastify({
//         text: "Producto "+cardTitle+ " añadido",
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////
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

// const producto1 = new Producto (1,"ToteNegra",2000,"/img/totenegra.webp")
// const producto2 = new Producto (2,"BuzoBordado", 4000, "/img/buzoBordado.webp")
// const producto3 = new Producto (3,"RemeraBordada",2200,"/img/remeraBordada.webp")
// const producto4 = new Producto (4,"Cartuchera", 2500, "/img/cartuchera.webp")
// const producto5 = new Producto (5,"CuadroBordado", 1700,"/img/cuadroBordado.webp")

// const productos = [producto5,producto2,producto3,producto4,producto1]

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




/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const dolar = document.getElementById("fetch")

// function mostrarFetch(){
//     fetch("https://criptoya.com/api/dolar")
//     .then(response => response.json())
//     .then(({oficial})=> {
//         dolar.innerHTML = `
//             <h2> Valor del dolar: </h2>
//             <p> ${oficial}</p>
    
//         `
//     })
// }

// mostrarFetch()

// setInterval(()=>{
//     mostrarFetch()
// }),10000

// class Producto{
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// let precioTotal = 0

// const desestructurar = (item) =>{                 //desestructuracion en parametros
//     const {precio} = item
//     precioTotal= precioTotal + precio
//     console.log(precio)
//     console.log(precioTotal)
// }

// function total2(){
//     let verTotal = document.getElementById("botonTotal")
//     verTotal.innerText = "$ "+ acumulador+""
//     console.log("total: "+acumulador)
// }

// const arrayCarrito = [];

// var valor = 0;

// let acumulador = 0;

// const botonTote = document.getElementById("botonTote")

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
//           background: "linear-gradient(to right, #cbc571, #9e9c7d)",
//           color: "#000000"
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
// }

// botonTote.addEventListener("click",()=>{
//     let nombre = "ToteNegra";
//     let precio = 2000;
//     acumulador = acumulador + precio

//     const producto1 = new Producto (nombre, precio);

//     desestructurar(producto1)

//     arrayCarrito.push(producto1)

//     añadido(producto1)

//     console.log(...arrayCarrito)

//     total2()

//     //const enJSON = JSON.stringify(producto1);
//     //localStorage.setItem(valor, enJSON);

//     valor++

//     localStorage.setItem(valor, JSON.stringify(producto1));

// })

// const botonBuzo = document.getElementById("botonBuzo")

// botonBuzo.addEventListener("click",()=>{
//     let nombre = "Buzo Bordado";
//     let precio = 4000;
//     acumulador = acumulador + precio

//     const producto1 = new Producto (nombre, precio);

//     desestructurar(producto1)

//     arrayCarrito.push(producto1)

//     añadido()

//     console.log(...arrayCarrito)

//     total2()

//     //const enJSON = JSON.stringify(producto1);
//     //localStorage.setItem(valor, enJSON);
//     valor++

//     localStorage.setItem(valor, JSON.stringify(producto1));
// })

// const botonRemera = document.getElementById("botonRemera")

// botonRemera.addEventListener("click",()=>{
//     let nombre = "Remera Bordada";
//     let precio = 2000;
//     acumulador = acumulador + precio

//     const producto1 = new Producto (nombre, precio);

//     desestructurar(producto1)

//     arrayCarrito.push(producto1)

//     añadido()

//     console.log(...arrayCarrito)

//     total2()

//     //const enJSON = JSON.stringify(producto1);
//     //localStorage.setItem(valor, enJSON);
//     valor++

//     localStorage.setItem(valor, JSON.stringify(producto1));
// })

// const botonCartuchera = document.getElementById("botonCartuchera")

// botonCartuchera.addEventListener("click",()=>{
//     let nombre = "Cartuchera bordada";
//     let precio = 2500;
//     acumulador = acumulador + precio

//     const producto1 = new Producto (nombre, precio);

//     desestructurar(producto1)

//     arrayCarrito.push(producto1)

//     añadido()

//     console.log(...arrayCarrito)

//     total2()

//     //const enJSON = JSON.stringify(producto1);
//     //localStorage.setItem(valor, enJSON);
//     valor++

//     localStorage.setItem(valor, JSON.stringify(producto1));
// })

// const botonCuadro = document.getElementById("botonCuadro")

// botonCuadro.addEventListener("click",()=>{
//     let nombre = "Cuadro Bordado";
//     let precio = 1700;
//     acumulador = acumulador + precio

//     const producto1 = new Producto (nombre, precio);

//     desestructurar(producto1)

//     arrayCarrito.push(producto1)

//     añadido()

//     console.log(...arrayCarrito)

//     total2()

//     //const enJSON = JSON.stringify(producto1);
//     //localStorage.setItem(valor, enJSON);
//     valor++

//     localStorage.setItem(valor, JSON.stringify(producto1));
// })

// const botonCarrito = document.getElementById("botonCarrito")

// botonCarrito.addEventListener("click",()=>{
//     // let verTotal = document.getElementById("botonTotal")
//     // verTotal.innerText = "$ "+ acumulador+""
//     // console.log("total: "+acumulador)
//     localStorage.clear()
//     acumulador = 0
//     total2()
//     Toastify({
//         text: "Carrito vaciado",
//         duration: 3000,
//         newWindow: false,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #862222, #191828)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();

// })







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let restar = 0

let acumulador = 0

let verTotalCarrito = document.getElementById("total")

const carritoLista = document.getElementById("carrito2")

const vaciarCarrito = document.getElementById("boton-vaciar")

localStorage.setItem("acumuladorKey", acumulador)

function total2(){
    let verTotal = document.getElementById("botonTotal")
    localStorage.setItem("acumuladorKey", acumulador)
    let acumulador2 = localStorage.getItem("acumuladorKey");
    verTotal.innerText = "$ "+ acumulador2+""
    console.log("total: "+acumulador2)

}


const divProductos = document.getElementById("divProductos")

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const botonCarrito = document.getElementById("botonCarrito")

async function consultarProductos(){
    const response = await fetch("./json/productos.json")
    const productos = await response.json()
    return productos
}///////////////////asincronismo async await

fetch("./json/productos.json")
.then(response => response.json())
.then(productos =>{
    productos.forEach((producto, indice)=>{
        divProductos.innerHTML += `
        <div class="card" id= "producto${indice}" style="width: 18rem;margin: 6px;">
            <img id= "img${producto.id}" class="card-img-top" src="./img/${producto.img}" alt="imagen del producto">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$ ${producto.precio} </p>
                <p id= "stock${producto.id}" class="card-text">stock: ${producto.stock} </p>
                <button class= "btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `
    })

    productos.forEach((producto, indice) => {
        const cardProducto = document.getElementById(`producto${indice}`)
        cardProducto.children[1].children[3].addEventListener('click', () =>{
            if(carrito.find(prod => prod.id == producto.id)){
                let index = carrito.findIndex((prod => prod.id == producto.id))
                
                if(carrito[index].cantidad < producto.stock){
                    carrito[index].cantidad++
                    acumulador = acumulador + producto.precio
                    total2()

                    agregar(producto.nombre,producto.precio,producto.img)

                    Toastify({
                        text: "Producto "+producto.nombre+ " añadido",
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

                        menosStock(producto.stock,producto.id,producto.img)
                } else{
                    Toastify({
                        text: "No hay mas stock del producto",
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
                }
            } else{
                const prodCarrito = {id: producto.id, cantidad: 1}
                carrito.push(prodCarrito)
                acumulador = acumulador + producto.precio
                total2()

                agregar(producto.nombre,producto.precio,producto.img)

                Toastify({
                    text: "Producto "+producto.nombre+ " añadido",
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
                
                menosStock(producto.stock,producto.id)
            }
            
            localStorage.setItem("carrito",JSON.stringify(carrito))

            let aprender = JSON.parse(localStorage.getItem('carrito'))
            
            // const nuevo =aprender.find(apr => apr.id == producto.id)
            // console.log(nuevo.id)
            // carritoLista.innerHTML +=
            // `<li>id= ${nuevo.id}cantidad: ${nuevo.cantidad} Precio: $ <img src="./img/" width= 40px height= 40px alt="imagen del producto"></li>`


            

        })
        
    })


})
//agregar async despues de la coma
vaciarCarrito.addEventListener('click', ()=>{
    
    localStorage.clear()
    acumulador = 0
    carritoLista.innerHTML = ""
    verTotalCarrito.innerText = "TOTAL:   $ 0 "
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
    location.reload();
    //let verTotal = document.getElementById("botonTotal")
    //verTotal.innerText = "$ "+ acumulador+""
    //console.log("total: "+acumulador)
    
    
    
    // const prodCarrito = JSON.parse(localStorage.getItem("carrito"))

    // if(prodCarrito.length == 0){
    //     console.log("carrito vacio")
    // }else{
    //     const productos2 = await consultarProductos()
    //     //console.log(productos2)
    //     prodCarrito.forEach((producto)=>{
            
    //     })
    // }
})

// function cambio(){
//     productos.forEach((producto,indice)=>{
//         const cambiarStock = document.getElementById("stock")

//         cambiarStock.innerHTML = `Stock : ${stockCambiante}`
//     })
// }
// cambio()

domCarrito = document.getElementById("carrito")
 
const prodCarrito = JSON.parse(localStorage.getItem("carrito"))





async function agregar(nombreCarrito,precioCarrito,imgCarrito){
    const domCarrito = document.getElementById("carrito")
    //const carritoLista = document.getElementById("carrito2")
    carritoLista.innerHTML +=
        //<button id="borrarDelCarrito"  class="btn btn-danger btn-sm borrar">borrar  ${nombreCarrito}</button>//
        `<li>${nombreCarrito} Precio: $ ${precioCarrito} <img src="./img/${imgCarrito}" width= 40px height= 40px alt="imagen del producto"></li>`

    //let verTotalCarrito = document.getElementById("total")
    localStorage.setItem("acumuladorKey", acumulador)
    let acumulador2 = localStorage.getItem("acumuladorKey");
    verTotalCarrito.innerText = "TOTAL:   $ "+ acumulador2+""
    console.log("total: "+acumulador2)

    //const vaciarCarrito = document.getElementById("boton-vaciar")
    vaciarCarrito.addEventListener('click', ()=>{

    })

    //BORRAR PRODUCTO DEL CARRITO

    const botonBorrarCarrito = document.getElementsByClassName("borrar")

    botonBorrarCarrito.addEventListener('click',()=>{
        console.log(botonBorrarCarrito)
    })
}
const mostrarTabla = document.getElementById("carrito")

botonCarrito.addEventListener('click', ()=>{
    console.log("lo tocste")

    
    mostrarTabla.className = ".mostrar"

})

const botonOcultar = document.getElementById("ocultar")

botonOcultar.addEventListener('click', ()=>{
    console.log("lo tocste")

    mostrarTabla.remove("mostrar")
    mostrarTabla.className = ".noMostrar"

})


//BOTON TERMINAR COMPRA

const botonTerminar = document.getElementById("boton-terminar")

botonTerminar.addEventListener('click', ()=>{
    Swal.fire({
        title: 'Esta seguro de terminar la compra?',
        text: `Total: $  ${acumulador}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, comprar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra terminada',
                'Su compra a sido realizada exitosamente',
                'success'
            )
            localStorage.clear()
            acumulador = 0
            carritoLista.innerHTML = ""
            verTotalCarrito.innerText = "TOTAL:   $ 0 "
            total2()
            setTimeout(function(){
                location.reload();
            }, 2000);
            
        }
    })
    
    

})
let contador =0


//CAMBIAR EL STOCK EN EL DOM
//solo pude hacerlo identificando cada uno
//averiguar como hacerlo para todos en general

async function menosStock(stockNuevo,idStock,imgNuevo){
    if (idStock == 1){contador = contador + 1
        stockNuevo = stockNuevo - contador
        console.log(stockNuevo)
        const tote = document.getElementById("stock1")
        tote.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
    } 
}
