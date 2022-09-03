
const saludar=(nombre)=>console.log(`hola ${nombre}`);
saludar("sofia")

const multiplicación=(a,b)=>console.log(a*b)
multiplicación(3,15)

function crearAlumno(nombre, apellido, edad, materias){
    let alumno = {
        nombre,
        apellido,
        edad,
        materias
    }

    return console.log(alumno);
}

crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés'])

const devolverFecha=(dia,mes,año)=>console.log(`Hoy es ${dia}/${mes}/${año}`)
devolverFecha('10','09','2022');

   