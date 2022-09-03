const promesa = new Promise((resolve, reject)=>{

    if( 10 === 11){
        resolve('Los valores son iguales');
    } else {
        reject('Los valores son distintos')
    }
})
// () ? () : () 
promesa
    .then(aceptable=>console.log(aceptable))
    //.then(aceptableDos=>console.log(aceptableDos))
    .catch(error=>console.log(error))
    .finally(console.log("ha llegado al final de todo!!😉🤔🤬"))

       //Promesa dentro en una función.
function promesaDos(provincia){

    const promesa = ('Formosa'===provincia)?('Usted está ubicado en Formosa'):('Error al realizar la consulta');

    return console.log(promesa);
}

promesaDos('Formosa')



    const promesaTres =(valorBooleano)=> new Promise((resolve, reject)=>{
        ( true === valorBooleano )
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
    })
    promesaTres(false).then(aceptable=>console.log(aceptable)).catch(error=>console.log(error))


const promesaCuatro=async(valorBooleano)=>{
    try{
const res=await promesaTres(valorBooleano)
console.log(`${res} con await`)
    }catch(err){
console.log(err)
    }
}
promesaCuatro(4==2+2)