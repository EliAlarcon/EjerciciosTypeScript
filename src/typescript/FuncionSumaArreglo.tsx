import React from 'react'

export const FuncionSumaArreglo = () => {
    const sumaArreglo = (arregloNumeros: number[]) => {
        const total = arregloNumeros.reduce((valorInicial, valorActual)=>{
            return valorInicial + valorActual;
        }, 0 );
        return total;
    }
  return (
    <div>
        <h6>2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. </h6>
        <span>El resultado es: {sumaArreglo([1,2,3,4])} </span>
    </div>
  )
}
