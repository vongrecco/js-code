//kiedy dokument zostanie wczytany
document.addEventListener("DOMContentLoaded", function(event){
	'user scrict';
	document.getElementById('click').addEventListener('click', loadText());


	function loadText(){

		// tworzenie obiektu zapytania xml
		var xhr = new XMLHttpRequest();



		// Holds the status of the XMLHttpRequest. - statusy połączenia
		// 0: request not initialized - nic nie wysłano
		// 1: server connection established - otwarto żadzanie
		// 2: request received - wysłano nagłówki
		// 3: processing request - wczytanie danych 
		// 4: request finished and response is ready - zakonczone wczytywanie 

		// status	Returns the status-number of a request
		// 200: "OK"
		// 301: "przeniesione w inne miejsce"
		// 304: "nie zmodyfikowaneo"
		// 403: "Forbidden" - zabronione
		// 404: "Not Found" - nie znaleziono
		// 500: "serwer error"
		
		// argumenty open:
		// 1.metoda
		// 2.adres do pobieranych danych
		// 3.synchroniczne czy asynchroniczne: s. kiedy w trakcie wczytywania wynikow zapytania jest przetwarzany kod js, czyli np. wywolują się funkcje czy też zdarzenia. A. kiedy dane muszą zostać pobrane i dopiero po tym działają inne skrypty (opcjonalnie)
		// 4.uzytkownik jesli wymagana jest podanie user i pass (opcjonalne)
		// 4.hasło jesli wymagana jest podanie user i pass (opcjonalne)

		//wywołanie zapytania metodą open
		xhr.open("GET", 'sample.txt', true);

		xhr.onload = function(){
			console.log("READYSTATE: ", xhr.readyState);
			if(this.status == 200){
				document.getElementById("text").innerHTML = this.responseText;
				console.log(this.responseText);
			} else if(this.status = 404){
				document.getElementById("text").innerHTML = "błąd pobierania danych";
			}
		}

		// jesli wystąpi błąd
		// xhr.onerror = function(){
		// 	console.log('some error...');
		// }

		// optionalnie aby sprawdzic progress mozna uzyc:

		// xhr.onprogress = function(){
		// 	console.log("READYSTATE: ", xhr.readyState);
		// }

		// druga metoda połączenia

		// xhr.onreadystatechange = function(){
		// 	if(this.readyState == 4 && this.status == 200){
		// 		console.log(this.responseText);
		// 	}
		// }

		// responseText	Returns the response data as a string
		// responseXML	Returns the response data as XML data

		// abort() - służy do przerwania zapytania, np. w sytuacji kiedy pobieranie trwa zbyt długo. Można umiescic w funckji czasowej:

		// var ajaxTimer = serTimeout(function(){
		// 	if(xhr){
		// 		xhr.abort();
		// 		xhr=null;
		// 	}
		// }, 5000);



		//wysłanie zapytania
		xhr.send();
	}
});