import React from "react";

export const ArregloDividido = () => {
  const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const arregloModificado = arreglo.map((numero) => {
    return numero / 5;
  });

  return (
    <div>
      <h6>
        3. Del siguiente arreglo devolver un nuevo arreglo con los valores
        divididos para 5. const arreglo = [5,10,15,20,25,30,35,40,45,50]
      </h6>
      <span>El resultado es: {arregloModificado.join(', ')} </span>
    </div>
  );
};
