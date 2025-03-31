// Variables y Constantes

const nombre = "Juan";
const apellido = "Pérez";

let valorDado = 5;
valorDado = 4 + 5;

console.log(nombre, apellido, valorDado);

// var No se debe usar, ya que es una variable global y puede causar problemas de alcance
if (true) {
  const nombre = "Pedro";
  console.log(nombre);
}

console.log(valorDado);
