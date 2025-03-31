const personajes = ["Goku", "Vegeta", "Piccolo", "Gohan", "Krillin"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arreglo se llamara nombre y sera un string
// 2. El segundo valor del arreglo se llamara setNombre y sera una funcion
const miuseState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
const [nombre, setNombre] = miuseState("Marvin");
console.log(nombre);
setNombre()
