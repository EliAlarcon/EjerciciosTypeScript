import React from 'react'
import { Acumulador } from './Components/Acumulador';
//import { ObjetoAlumnos } from './typescript/ObjetoAlumnos';
//import { TextosNumeros } from './typescript/TextosNumeros';
//import { ParImpar } from './typescript/ParImpar';
//import { ArregloDividido } from './typescript/ArregloDividido';
//import { FuncionSumaArreglo } from './typescript/FuncionSumaArreglo';
//import { FuncionArea } from './typescript/FuncionArea';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Actividad Autónoma 1</h1>
      <h2>EJERCICIOS TYPESCRIPT - REACT</h2>
      <hr/>
      {/* <FuncionArea/> */}
      {/* <FuncionSumaArreglo/> */}
      {/* <ArregloDividido/> */}
      {/* <ParImpar/> */}
      {/* <TextosNumeros/> */}
      {/* <ObjetoAlumnos/> */}
      <Acumulador/>
    </div>
  )
}

export default App;