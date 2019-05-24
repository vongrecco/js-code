var	container = document.getElementById('container');
container.onmousemove = customPointer;
var cursor = document.getElementById('cursor');

	function customPointer(event){
		cursor.style.top = event.clientY - (cursor.offsetHeight / 2) + 'px';
		cursor.style.left = event.clientX - (cursor.offsetWidth / 2) + 'px';
		console.log(cursor.offsetWidth / 2 );
	}

	// customPointer();



		// var cont = document.getElementById('container');
		// cont.onmousemove = applyCustomPointer;

		// var customPointer = document.getElementById('customPointer');

		// function applyCustomPointer (event) {
		// 	customPointer.style.left = event.clientX - (customPointer.offsetWidth / 2) + 'px';
		// 	customPointer.style.top = event.clientY - (customPointer.offsetHeight / 2) + 'px';
		// }
