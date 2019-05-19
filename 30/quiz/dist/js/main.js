/*

keycode.info

*/



function playSound(e){
  const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
  const key = document.querySelector('.key[data-key="'+e.keyCode+'"]');
    console.log(key);
  if(!audio) return; // stop play
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing'); 
}

function removeTranistion(e){

  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');

}

function clickSound(e){
  
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTranistion));

window.addEventListener('keydown', playSound);
