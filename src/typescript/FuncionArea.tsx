import React from 'react'

export const FuncionArea = () => {
    const areaCuadrado =(num: number):number=>{
        return num**2;
    }
  return (
    <div>
        <h6>1.	Crear una función con parámetros que permita calcular el área de un cuadrado</h6>
        <span>El resultado es: {areaCuadrado(3)} </span>
    </div>
  )
}
