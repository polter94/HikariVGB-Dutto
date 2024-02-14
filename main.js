//OBJETO 'productos'
// TODO

//CONSTRUCTOR de la lista de productos - asignar clase cont-tienda
//1 crea nodo
let productos = document.createElement("div");
//2 asigna contenido
productos.innerHTML = " <h2> Productos </h2>"
//3 asignacion de padre a traves de contenedor
let contProductos = document.getElementById("listaProd");
contProductos.append(productos);

//CONSTRUCTOR del carrito - asignar clase cont-carrito
//1 crea nodo
let carrito = document.createElement("div");
//2 asigna contenido
carrito.innerHTML = " <h2> Carrito </h2>"
//3 asignacion de padre a traves de contenedor
let contCarrito = document.getElementById("listaProd");
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