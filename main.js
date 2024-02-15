//OBJETO 'productos'
let productos = [
    {id: 1, nombre: "Anillo", precio: 3500},
    {id: 2, nombre: "Dije anillo", precio: 2500},
    {id: 3, nombre: "Dije cuadrado", precio: 5000},
    {id: 4, nombre: "Dije cuadrado XL", precio: 1500},
    {id: 5, nombre: "Dije gota", precio: 9000},
    {id: 6, nombre: "Dije #", precio: 4000}
]
// TODO

//CONSTRUCTOR de la lista de productos - asignar clase cont-tienda
let cards = document.getElementById("listaProd");

productos.forEach((item) => {
    let div = document.createElement("div");
    div.className = "producto-card";
    div.innerHTML = `
    <img src="./img/productos/${item.id}.png" alt="" class="producto-img">
    <p>${item.nombre}</p>
    <p id="precio">$ ${item.precio}</p>
    <button type="button" class="btn-comprar">Agregar al carrito</button>
    `;
    cards.append(div);
});

//CONSTRUCTOR del carrito - asignar clase cont-carrito
let carrito = document.createElement("div");
carrito.innerHTML = "<h2>carrito</h2>"
carrito.className = "cont-carrito";

let contCarrito = document.getElementById("carrito");
contCarrito.append(carrito);


//  FUNCION para cambiar ${precio} por 'sin stock'
// TODO

//  FUNCION para identificar el boton 'comprar' que se presiono
// TODO
const btnComprar = document.querySelectorAll(".btn-comprar");

//      no se por que no funciona si se supone que debe ser una funcion anonima, pero tira "funcion" is not defined ???
// btnComprar.forEach(boton => {
//     boton.addEventListener('click', funcion(evento)); {
//         const prodId = evento.target.dataset.prodId;
//         console.log('Boton presionado con ID: ', prodId);
//     };
// });

//      segundo intento, mismo reslutado, no funciona
// let boton = document.querySelectorAll(".btn-comprar");
// for (let i = 0; i < boton.length; i++) {
//     boton[i].addEventListener("click", funcion(){
//         alert("fue presionado");
// });
// }