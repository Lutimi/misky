import React from "react";

const Curso = (props) => {
  return(
    <div>
      <hr />
      <h1>Curso: {props.curso}</h1>
      <h1>Nombre: {props.alumno}</h1>
      <h1>Edad: {props.edad}</h1>
    </div>
  );
}
export default Curso; /* recomendable */
