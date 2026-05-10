/**Parte 1---->conseguir las razas en un array */

const getAllBreeds = async() => {
  try {
    /** La URL tiene que ser la de la raza de los perros, no la de la página principal(https://dog.ceo/dog-api/)*/
    const resp = await fetch("https://dog.ceo/api/breeds/list/all");
/**Se valida la respuesta */
    if(!resp.ok){
      throw (resp.status);
    } const data = await resp.json();

    /**Las razas están en la propiedad message, que además es un objeto (no un array). Las llaves ("keys") son los nombres de las razas, por eso se usa Object.keys para conseguir el array con los nombres de las razas. */
    const arrayPerros = Object.keys(data.message);
    return arrayPerros;
    
  } catch(error){
    console.log(`Error ${error}`);
  }

};

getAllBreeds()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error)
  })





/**Parte 2: conseguir una foto random de un perro */

const getRandomDog  = async() => {
  try{
    const img = await fetch("https://dog.ceo/api/breeds/image/random");
/**Se valida la respuesta */
    if(!img.ok){
      throw(img.status);
    } const data2 = await img.json();


/**message tiene la url de la foto del perro*/
    const fotoPerro = data2.message;

    return fotoPerro;

  } catch(error2){
    console.log(`Error ${error2}`);
  }

};

getRandomDog().then((respuesta2) => {console.log(respuesta2)}).catch((error2) => console.error(error2));





const getAllImagesByBreed = async() => {
  try{
    const resp2 = await fetch("https://dog.ceo/api/breed/komondor/images");
/**Se valida la respuesta */
    if(!resp2.ok){
      throw(resp2.status);
    } 
    
      const data3 = await resp2.json();

      return data3.message;

  } catch(error3){
    console.log(`Error ${error3}`);
  }

};

getAllImagesByBreed().then(respuesta3 => {console.log(respuesta3)}).catch((error3) => console.error(error3));



/**Ejercicio 4: Devuelve las fotos del perro que el usuario quiere ver */



const getAllImagesByBreed2 = async(breed) => {
  try{
/**la raza la da el usuario, así que en la url tiene que "entrar" la raza que la persona decida */
    const resp3 = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
/**Se valida la respuesta */
    if(!resp3.ok){
      throw(`No se encontró la raza ${breed}`);
    } 
    
      const data3 = await resp3.json();

      return data3.message;

  } catch(error3){
    console.log(`Error ${error3}`);
  }

};

/**Hay que meter el nombre en minuscula, sino da error */

getAllImagesByBreed2('akita').then(fotoPerroUsuario => {console.log("Fotos de akita:", fotoPerroUsuario)}).catch((error3) => console.error(error3));




