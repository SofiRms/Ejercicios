const retrasar = (milisegundos) =>
  new Promise((resolve) => setTimeout(resolve, milisegundos));

  async function obtenerPcias() {
        try {
          await retrasar(1800);
          const consulta = await fetch("https://apis.datos.gob.ar/georef/api/provincias");
          const respuestajson = consulta.json();
          return respuestajson;
        } catch (error) {
          console.log(error);
        }
      }
      async function obtenerDptos() {
        try {
          await retrasar(1391);
          const consulta = await fetch(
            "https://apis.datos.gob.ar/georef/api/departamentos"
          );
          const jsonrespuesta = consulta.json();
          return jsonrespuesta;
        } catch (error) {
          console.log(error);
        }
      }
      async function obtenerLocalidades() {
        try {
          await retrasar(900);
          const consulta = await fetch(
            "https://apis.datos.gob.ar/georef/api/localidades"
          );
          const resjson = consulta.json();
          return resjson;
        } catch (error) {
          console.log(error);
        }
    }
    

    
// Funcion para obtener todos los datos
const consultarDatos=async()=> {

     const provincias =await obtenerPcias();
        const dptos =await obtenerDptos();
        const localidades = await obtenerLocalidades();
      
        console.log(provincias);
        console.log(dptos);
        console.log(localidades);


}

consultarDatos()

