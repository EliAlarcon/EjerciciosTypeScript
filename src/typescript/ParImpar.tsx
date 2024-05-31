import React from "react";

export const ParImpar = () => {
    const numeros: number[] = [1,2,3,4];
    const palabras = numeros.map((numero)=>{
        if (numero%2===0) {
            return 'par'
        } else{
            return 'impar'
        }
    })
  return (
    <div>
      <h6>
        4. Del siguiente arreglo identificar si el número es par o impar. Se
        solicita generar un nuevo arreglo que remplace el número por las
        palabras correspondiente:
        <ul>
          <li>Si es número par, colocar par</li>
          <li>Si es número impar, colocar impar</li>
        </ul>
        const numeros = [1,2,3,4]
      </h6>
      <span>El resultado es: {palabras.join(', ')} </span>
    </div>
  );
};
