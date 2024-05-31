import React, { useState } from "react";

export const Acumulador = () => {
    //Hook useState
    const [valor, setValor] = useState<number>(0);

    //Función del acumulador
    const acumulador = (numero: number) =>{
        setValor(valor+numero)
    }

  return (
    <div>
      <h6>
        7. Empleado el hook useState crear un acumulador de 5. Se debe visualizar
        el valor del acumular y dos botones (incrementar - disminuir)
      </h6>
      <div
        style={{
          border: "solid",
          marginInline: "45%",
          textAlign: "center",
          borderColor: "green",
          fontSize: 25
        }}
      >
        {valor}
      </div>
      <div style={{
        marginInline: "45%",
        marginBlock: 10
      }}>
      <button className="btn btn-primary" onClick={() => acumulador(5)}>
        +5
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={()=> acumulador(-5)}>-5</button>
      </div>
    </div>
  );
};
