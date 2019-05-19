window.onclick = gunshoot;

function gunshoot(event){
	// klonowanie 

	var el = document.getElementById('gun-shoot').cloneNode();

	//dodanie do html
	document.body.appendChild(el);

	// usunięcie display none
	el.style.display = "block";

	//

	el.style.left = event.clientX - (el.offsetWidth / 2) +"px";
	el.style.top = event.clientY - (el.offsetWidth / 2)+"px";

	var sound = new Audio();

	sound.src = "gunsound.mp3";

	sound.play();
}