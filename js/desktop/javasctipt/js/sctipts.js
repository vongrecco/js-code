function init(){

	var email = document.getElementById('email');
	var password = document.getElementById('password');

	if((email.value.lenght > 0) && (password.value.lenght > 0 )){
		return true;
	} else{
		alert('Proszę uzupełnij formularz');
		return false;
	}

	if(document && document.getElementById){
		var loginForm = getElementById('loginForm');
		loginForm.onSubmit = validateForm;
	}
}