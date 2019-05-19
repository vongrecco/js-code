var container = document.querySelector('.container');

let cursor = document.createElement('smile');
cursor.classList.add('smile');
document.body.appendChild(cursor);

cursor.style.position = "absolute";

container.onmousemove = move;

function move(event){
	console.log('move');
	cursor.style.left = event.clientX - cursor.offsetWidth / 2;
	// szerokość elementu!
	// console.log(cursor.offsetWidth)
	cursor.style.top = event.clientY - cursor.offsetHeight / 2;
}

