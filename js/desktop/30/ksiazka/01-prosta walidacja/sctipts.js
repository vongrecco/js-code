function validateForm(){
	var email = document.getElementById('email'),
		password = document.getElementById('password');

		if( (email.value.length > 0 ) && (password.value.length > 0 ) ){
			return true;
		} else{
			alert('uzupełnij formularz');
			return false;
		}

}

function init(){
	'use strict';
	console.trace();
	if(document && document.getElementById){
		var loginForm = document.getElementById('loginForm');
		loginForm.onsubmit = validateForm;
	}
}

window.onload = init;