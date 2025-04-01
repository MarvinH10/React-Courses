import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // Importen el
//         const heroe = getHeroById(2);
//         resolve(heroe)
//         // reject('No se pudo encontrar el heroe')
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // Importen el
      const heroe = getHeroById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });

  // return promesa;
};

getHeroeByIdAsync(3)
//   .then((heroe) => console.log("heroe", heroe))
  .then(console.log)
  .catch(console.warn);
