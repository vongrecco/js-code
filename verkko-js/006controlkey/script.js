let smile = document.createElement('div');
smile.classList.add("smile");
smile.innerText = ":)";
document.body.appendChild(smile);
console.log('asd');


window.onkeydown = moveEl;

function moveEl(e){

	let speed = 20;
	smile.style.position = "absolute";
	smile.style.transtion = "all 1s linear ";


	if(e.keyCode == 17 && e.keyCode == 39){
		console.log('rotate');
	}

	switch(e.keyCode){
		case 37:
		smile.style.left = (smile.offsetLeft - speed) + "px";
		break;
		case 39:
		smile.style.left = (smile.offsetLeft + speed) + "px";
		break;
		case 38:
		smile.style.top = (smile.offsetTop - speed) + "px";
		break;
		case 40:
		smile.style.top = (smile.offsetTop + speed) + "px";
		break;
		default:
		console.log('złe przyciski')
	}


	// //left
	// 37
	// //right
	// 39
	// //top
	// 38
	// //down
	// 40
}