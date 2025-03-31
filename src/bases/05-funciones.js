//  Funciones en JS
// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar("Pepito"));

console.log(saludar2("Jose"));
console.log(saludar3("Noni"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una función de flecha (LISTO)
// 2. Retornar un objeto implícito (LISTO)
// 3. Pruebas (LISTO)
const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);