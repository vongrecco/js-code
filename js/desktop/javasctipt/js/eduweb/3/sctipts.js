var zgoda = confirm("Podasz swoje imie?");

if(zgoda == true){
	var imie = prompt('Podaj swoje imię:');
	document.write('Twoje imię to ' + imie);
} else{
	alert("Nie chciałeś podać imienia");
}