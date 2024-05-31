import React from "react";

export const TextosNumeros = () => {
  const datos = [7, 5, "sistemas", "hola", "adios", 2];
  const palabras = datos.filter((dato) => typeof dato == "string") as string[];
  const numeros = datos.filter((dato) => typeof dato == "number") as number[];
  let palabraMayor: string = "";
  let comp: number = 0;

  palabras.forEach((element) => {
    const longitud: number = element.toString().length;

    if (longitud > comp) {
      comp = longitud;
      palabraMayor = element.toString();
      console.log(palabraMayor);
    }
  });

  const suma: number = numeros.reduce((inicial, final) => inicial + final);
  const resta: number = numeros.reduce((inicial, final) => inicial - final);
  const multiplicacion: number = numeros.reduce(
    (inicial, final) => inicial * final
  );
  const division: number = numeros.reduce((inicial, final) => inicial / final);
  const promedio: number = suma / numeros.length;

  return (
    <div>
      <h6>
        5. A partir del siguiente array que se proporciona ejecutar las
        siguientes acciones: const datos= [7, 5, “sistemas”, "hola", "adios",
        2];
        <ul>
          <li>Determinar cuál de los tres datos de texto es mayor.</li>
          <li>
            Determinar el resultado de las cinco operaciones matemáticas
            realizadas con los tres datos numéricos.
          </li>
        </ul>
      </h6>
      <ul>
        <li>Dato de texto mayor: {palabraMayor} </li>
        <li>Suma: {suma} </li>
        <li>Resta: {resta} </li>
        <li>Multiplicación: {multiplicacion} </li>
        <li>División: {division} </li>
        <li>Promedio: {promedio} </li>
      </ul>
    </div>
  );
};
