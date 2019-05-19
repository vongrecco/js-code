
function a(){
	var text = document.getElementById('text').value;
	if( text == ""){
		alert('Ple puste');
	}
	if( isNaN(text)){
		alert('Podaj liczbe');
	}

	var message = text > 10 ? "Liczba większa od 10" : "Liczba mniejsza od 10";

	alert(message);
}

document.getElementById('klik').addEventListener('click', a);

