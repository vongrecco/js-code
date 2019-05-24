//DOMContentLoaded - dopiero po załadowaniu html strony

document.addEventListener('DOMContentLoaded', function(){

	let btn = document.getElementById('show');
	let input = document.querySelector('.input');

	btn.addEventListener('mouseover', function(){
		input.setAttribute('type', 'password');
	});

	btn.addEventListener('mouseout', function(){
		input.setAttribute('type', 'text');
	});

});