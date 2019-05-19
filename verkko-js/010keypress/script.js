

// onkeydown - The onkeydown event occurs when the user is pressing a key (on the keyboard).
//The onkeypress event occurs when the user presses a key (on the keyboard).
//The onkeyup event occurs when the user releases a key (on the keyboard).

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
//window or document
window.onkeydown = animateLetters;


function animateLetters(event){
	//Get the Unicode value of the pressed keyboard key:
	var keyCode = event.keyCode;

	// zmiana z uni code na zwykłe literki
	var c = String.fromCharCode(keyCode);

	var key = document.createElement("div");
	document.body.appendChild(key);
	key.style.position ="absolute";

	var fromLeft = Math.round(Math.random()*window.innerWidth);
	var fromTop = Math.round(Math.random()*window.innerHeight);

	key.style.left = fromLeft;
	key.style.top = fromTop;

	key.innerText = c;
	var color = colorArray[Math.floor(Math.random()*colorArray.length)];

	key.style.transition = "all 0.5s linear 0s";
	key.style.left=key.offsetLeft-30 +"px";
	key.style.top=key.offsetTop-30 +"px";
	key.style.fontSize = "100px";
	key.style.opacity = 1;
	key.style.color= color;

	var sound = new Audio("shoot.mp3");
	sound.play();
}
