window.addEventListener('click', function(event){
	let el = document.querySelector('.gunshoot');
	// klonowanie elementu el
	let clone = el.cloneNode();
	// dodanie do body elementu
	document.body.appendChild(clone);
	el.style.display ="block";
	// odległość od lewej strony ekranu po kliknięciu myszką / szerokość elementu / 2
	let x = event.clientX - (el.offsetWidth/2);
	let y = event.clientY - (el.offsetHeight/2);
	//window.inneWidth - szerokość ekranu
	console.log("left"+ x + "ekran: " + (window.innerWidth));


	if(x >= (window.innerWidth -(el.offsetWidth) )){
		el.style.left = x -(el.offsetWidth/2) + "px";
	}else{
		el.style.left = x + "px";
	}
	el.style.top = y + "px";
	
	var audio = new Audio('shoot.mp3')
	audio.play();

	//1 element znika po 3 sekundach
	clone.classList.add('fadeout');
	//2 nie można strzelać przy koncu ekranu
	//
});

