document.getElementById('btn').addEventListener('click', () => {
  //event.preventDefault();
  let tweet = document.getElementById('textareaTweet').value;
  //creo div contenedor para el tweet enviado
  const containerTweet = document.getElementById('tweetSent')
  let tweetSent = document.createElement("div");
  containerTweet.appendChild(tweetSent);
  //imprimir tweet en el elemento div que he creado
  tweetSent.innerText = tweet;
  count();
});
//funcion para contar caracteres ingresados en texarea
function count() {
  document.forms[0].caracteres.value = document.forms[0].tweet.value.length;  
}