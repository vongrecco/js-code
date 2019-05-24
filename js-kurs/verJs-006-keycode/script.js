
// window.onkeydown = moveImg;

// pobiera adres strony
console.log(window.location.href); 

// keydown - wcisniecie przycisku 
window.onkeydown = moveImg;

var leftKey = 37,
	rightKey = 39,
	upKey = 38,
	downKey = 40,
	deg = 0,
	move = 20;

function moveImg(event){
// pokazuje kod przycisku na klawaturze
	var key = event.keyCode;
	var imagePos = document.getElementById('image');

	if( key == 17 ){
		deg -= 10; 
		imagePos.style.transform = 'rotate('+ deg + 'deg)';
		console.log(key);
	}else if( key == 18 ){
		deg += 10; 
		imagePos.style.transform = 'rotate('+ deg + 'deg)';
		console.log(key);
	}else if( key == leftKey){
		imagePos.style.left = imagePos.offsetLeft - move +'px';
		console.log(imagePos.offsetLeft);
	}else if( key == rightKey){
		imagePos.style.left = imagePos.offsetLeft + move +'px';
		console.log(imagePos.offsetLeft);
	}else if( key == upKey){
		imagePos.style.top = imagePos.offsetTop - move +'px';
		console.log(imagePos.offsetTop);
	}else if( key == downKey){
		imagePos.style.top = imagePos.offsetTop + move +'px';
		console.log(imagePos.offsetTop);
	}

	// console.log(key);
}


