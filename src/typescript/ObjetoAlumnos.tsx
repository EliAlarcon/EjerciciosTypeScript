//interface objeto alumno
interface Alumno{
    name: string,
    edad: number,
    calificacion: number
}

export const ObjetoAlumnos = () => {
    const alumnos : Alumno[] = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];
    
    const calcularPromedio =(alumnos: Alumno[]): number =>{
        const sumaCalificaciones = alumnos.reduce((acumulador, alumno)=>acumulador+alumno.calificacion,0);
        const promedioCalificaciones = sumaCalificaciones/alumnos.length;
        return promedioCalificaciones;
    }

    const promedio = calcularPromedio(alumnos);

  return (
    <div>
        <h6>6.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</h6>
        <span> El promedio de las calificaciones es: {promedio} </span>
    </div>
    
  )
}
