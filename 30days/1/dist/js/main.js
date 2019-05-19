/*

keycode.info

*/



function playSound(e){
  const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
  const key = document.querySelector('.key[data-key="'+e.keyCode+'"]');
    console.log(key);
  if(!audio) {
    console.log('nie ma takiego grania');
    return;
  } // stop play


  // The currentTime property sets or returns the current position (in seconds) of the audio/video playback.
  audio.currentTime = 0;
  //start play button
  audio.play();
  //This property is useful to add, remove and toggle CSS classes on an element.
  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing'); 
}

function removeTranistion(e){

//zczytuje właściowść transform z elementu css
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function clickSound(e){
  
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTranistion));

window.addEventListener('keydown', playSound);


function myFunction(event) {
    var x = event.keyCode;               // Get the Unicode value
    var y = String.fromCharCode(x);      // Convert the value into a character
    document.getElementById("demo").innerHTML = "literka "+"<span>"+ y +"</span>"+ " numeric number " + "<span>"+x+"</span>";
}

myFunction();