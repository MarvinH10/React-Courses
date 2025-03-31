// Desestructuracion
// Asignacion Destructurante
const persona = {
  nombre: "Carlos",
  edad: 30,
  pais: "Colombia",
};

// const { nombre, edad, pais } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(pais);

const getContext = ({ nombre, edad, rango = "Capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombrePersona: nombre,
    anios: edad,
    latlng: {
      lat: 14.1234,
      lng: -12.1234,
    },
  }
};

const { nombrePersona, anios, latlng: {lat, lng} } = getContext(persona);
console.log(nombrePersona, anios);
console.log(lat, lng);
