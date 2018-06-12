document.getElementById('btn').addEventListener('click', () => {
  //event.preventDefault();
  let tweet = document.getElementById('textareaTweet').value;
  //creo div contenedor para el tweet enviado
  const containerTweet = document.getElementById('tweetSent')
  let tweetSent = document.createElement("div");
  containerTweet.appendChild(tweetSent);

  tweetSent.innerText = tweet;
});