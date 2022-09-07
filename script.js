let restar = 0

let acumulador = 0

let verTotalCarrito = document.getElementById("total")

const carritoLista = document.getElementById("carrito2")

const vaciarCarrito = document.getElementById("boton-vaciar")

localStorage.setItem("acumuladorKey", acumulador)

// Mostrar el total:

function total2(){
    let verTotal = document.getElementById("botonTotal")
    localStorage.setItem("acumuladorKey", acumulador)
    let acumulador2 = localStorage.getItem("acumuladorKey");
    verTotal.innerText = "$ "+ acumulador2+""
}

const divProductos = document.getElementById("divProductos")

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []
const botonCarrito = document.getElementById("botonCarrito")

async function consultarProductos(){
    const response = await fetch("./json/productos.json")
    const productos = await response.json()
    return productos
}


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
                        gravity: "top", 
                        position: "left", 
                        stopOnFocus: true, 
                        style: {
                            background: "linear-gradient(to right, #cbc571, #9e9c7d)",
                            color: "#000000"
                        },
                        onClick: function(){} 
                        }).showToast();

                        menosStock(producto.stock,producto.id,producto.img)
                } else{
                    Toastify({
                        text: "No hay mas stock del producto",
                        duration: 3000,
                        newWindow: false,
                        close: true,
                        gravity: "top", 
                        position: "left", 
                        stopOnFocus: true, 
                        style: {
                            background: "linear-gradient(to right, #862222, #191828)",
                        },
                        onClick: function(){} 
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
                    gravity: "top", 
                    position: "left", 
                    stopOnFocus: true, 
                    style: {
                        background: "linear-gradient(to right, #cbc571, #9e9c7d)",
                        color: "#000000"
                    },
                    onClick: function(){} 
                    }).showToast();
                
                menosStock(producto.stock,producto.id)
            }
            
            localStorage.setItem("carrito",JSON.stringify(carrito))
        })
    })
})

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
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #862222, #191828)",
        },
        onClick: function(){} 
    }).showToast();
    location.reload();
})

// Agregar productos al carrito(DOM)
async function agregar(nombreCarrito,precioCarrito,imgCarrito){

    carritoLista.innerHTML +=
        `<li>${nombreCarrito} Precio: $ ${precioCarrito} <img src="./img/${imgCarrito}" width= 40px height= 40px alt="imagen del producto"></li>`

    localStorage.setItem("acumuladorKey", acumulador)
    let acumulador2 = localStorage.getItem("acumuladorKey");
    verTotalCarrito.innerText = "TOTAL:   $ "+ acumulador2+""
}

let ocultar = true

const mostrarTabla = document.getElementById("carrito")

// Mostrar el carrito
botonCarrito.addEventListener('click', ()=>{
    if(ocultar = true){
    console.log("lo tocste")
    mostrarTabla.className = ".mostrar"
    ocultar = false
    }
    else{
        mostrarTabla.remove("mostrar")
        mostrarTabla.className = ".noMostrar"
    }
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

//CAMBIAR EL STOCK EN EL DOM
//solo pude hacerlo identificando cada uno

let contador1 =0
let contador2 =0
let contador3 =0
let contador4 =0
let contador5 =0
let contador6 =0

async function menosStock(stockNuevo,idStock,imgNuevo,prodId){

    switch (idStock) {
        case 1:
            contador1 = contador1 + 1
            stockNuevo = stockNuevo - contador1
            const toteN = document.getElementById("stock1")
            toteN.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        case 2:
            contador2 = contador2 + 1
            stockNuevo = stockNuevo - contador2
            const buzoB = document.getElementById("stock2")
            buzoB.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        case 3:
            contador3 = contador3 + 1
            stockNuevo = stockNuevo - contador3
            const remeraB = document.getElementById("stock3")
            remeraB.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        case 4:
            contador4 = contador4 + 1
            stockNuevo = stockNuevo - contador4
            const cartu = document.getElementById("stock4")
            cartu.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        case 5:
            contador5 = contador5 + 1
            stockNuevo = stockNuevo - contador5
            const toteTick = document.getElementById("stock5")
            toteTick.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        case 6:
            contador6 = contador6 + 1
            stockNuevo = stockNuevo - contador6
            const toteB = document.getElementById("stock6")
            toteB.innerHTML = `<p id= "stock${idStock}" class="card-text">stock: ${stockNuevo} </p>`
            break;
        default:
            break;
    }
}

