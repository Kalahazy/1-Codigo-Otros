const baseEndpoint = 'https://api.github.com';
//Uso de backticks para poder hacer "String template" y así agregar al final de la variable baseEndpoint la dirección /users
const usersEndpoint = `${baseEndpoint}/users`;
//Se cambia a . para indicar que la busqueda del querySelector es por clase y se quita el simbolo de $ para tener buena práctica en la declaración de variables
const n = document.querySelector('.name');
const b = document.querySelector('.blog'); 
const l = document.querySelector('.location');

//Se agrega async a la funcion para poder usar el await
async function displayUser(username) {
  //Se quita el $ para referirnos a la variable n
  n.textContent = 'cargando...';
  //Se agregan backticks para poder hacer String template y concatenar la url de la variable usersEndpoint con el username recibido como parámetro
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Se declara la variable "data" para almacenar la respuesta del fetch en formato JSON y se agrega un await para esperar a que responda el fetch
  const data = await response.json();
  console.log(data);
  //Se quita el $ de las variables y se cambian las comillas simples por backticks para poder hacer String template con las propiedades del objeto data (JSON)
  n.textContent = `${data.name}`;
  b.textContent = `${data.blog}`;
  l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Se agregan backticks para poder hacer String template con la variable err
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);