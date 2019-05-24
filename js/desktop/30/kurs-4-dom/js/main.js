document.addEventListener("DOMContentLoaded", function(){

	var td = document.getElementsByTagName("td");

	for (var i = 0; i < td.length; i++){
		td[i] = "...";
	}

 // zwraca pierwszy element z pasujących. Jako jej argumenty podajemy wyrażenie CSS, które określa szukane elementy:
	var element = document.querySelector('.pobierz, .to ');
		console.log(element);
 // pobiera wszystkie pasujące elementy:

 	var elementy = document.getAllSelectors('.pobierz, .to');
 		console.log(elementy);
});