console.log("Ala");

window.addEventListener('keydown', function(e){
  var audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
  var key = document.querySelector('key[data-key="'+e.keyCode+'"]');
  console.log(audio);
  if(!audio) return; 
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

