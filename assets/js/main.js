document.getElementById('btn').addEventListener('click', (event)=>{
  //event.preventDefault();
 let tweet = document.getElementById('textareaTweet').value;
 document.getElementById('tweetSent').innerText= tweet;
});