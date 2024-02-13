//  FUNCION para cambiar ${precio} por 'sin stock'

//  FUNCION para identificar el boton 'comprar' que se presiono
const btnComprar = document.querySelectorAll(".btn-comprar");

let boton = document.querySelectorAll(".btn-comprar");
for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", funcion(){
        alert("fue presionado");
});
}

//      no se por que no funciona si se supone que debe ser una funcion anonima, pero tira "funcion" is not defined ???
// btnComprar.forEach(boton => {
//     boton.addEventListener('click', funcion(evento)); {
//         const prodId = evento.target.dataset.prodId;
//         console.log('Boton presionado con ID: ', prodId);
//     };
// });