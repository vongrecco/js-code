/*

1. budowa ciasteczka
	Set-Cookie: value;max-age=seconds;domain=domena;path=sciezka;secure;HttpOnly
	a)nazwa ciasteczka - Set-Cookie: value;max-age=seconds;domain=domena;path=sciezka;secure;HttpOnly

	b)czas w sekundach - Parametr expires określa datę wygaśnięcia. W ciasteczku data wygaśnięcia jest przechowywana w sekundach, ale my w celu jej ustalenia musimy ją podawać w formacie GTM. Po upływie daty wygaśnięcia ciasteczko zostaje usunięte z systemu.
	Jeżeli nie podamy tego parametru, wówczas ciastko zostanie utworzone do czasu trwania sesji czyli do czasu wyłączenia przeglądarki

	c)domena - Parametr domain określa domenę ciasteczka. Jeżeli nie ustawisz tego parametru, wówczas przeglądarka ustawi go jako nazwę serwera skąd zostało utworzone ciasteczko. 
	Adresy domeny możesz podawać na różne sposoby - jest tylko jedno zastrzeżenie - adres taki musi zawierać przynajmniej 2 kropki np.
		.pckurier.pl
		.digimer.pl

	d)scieżka - Parametr path ustawia ścieżkę skąd zostało utworzone ciasteczko. Najlepszym rozwiązaniem jest tutaj pozostawienie domyślnej wartości czyli "/".

	e)zabezpieczenie ciasteczka - Kolejny parametr ciasteczka to secure. Jeśli pominiesz ten parametr, przeglądarka automatycznie przyjmuje, że cookie dostępne jest dla każdej domeny lub programu CGI, jeśli tylko zgadzają się odpowiednie własności. Jeżeli ustawisz go na true, wtedy ciastka będą wysyłane tylko w zabezpieczonych połączeniach (https).

	f)http - 


*/

// 2.tworzenie ciasteczka

function setCookie1(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}

/*
Na początku tworzymy nazwę i wartość ciastka kodując je za pomocą encodeURI. W przeciwnym razie ktoś podał by nazwę ciastka np. "Moje ciasteczko", co jest niedopuszczalne - tutaj działają takie same zasady jak przy adresach url.
Kolejnymi czynnościami jest wyliczenie składowych tekstu zapisu ciastka.
Na samym końcu po prostu ustawiamy ten tekst dla document.cookie.
*/

document.querySelector('#addTest').addEventListener('click', function() {
    setCookie1('mojeCiasteczko', 'jegoWartosc');
});

// 3. odczyt ciasteczka nazwaCiastka=wartośćCiastka.

// console.log(cookies[0]); //wypisze nazwacookie1=wartosccookie1
// console.log(cookies[0].split("=")[0]) //nazwa pierwszego ciastka
// console.log(cookies[0].split("=")[1]) //wartość pierwszego ciastka

function showCookie1(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

//czytamy ciastko
console.log(showCookie1("Przedmiot"));

document.querySelector('#readTest').addEventListener('click', function() {
    console.log('Wartość ciastka mojeCiasteczko: ', showCookie("mojeCiasteczko"));
});

// 4. usuwanie ciastka

function deleteCookie1(name) {
    const data = new Date();
    data.setTime(date.getMonth()-1);
    const name = encodeURIComponent(name);
    document.cookie = name + "=; expires=" + data.toGMTString();
}


// Przykład dwa 

//te funkcje już znamy
function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookiesEnabled) {
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}

function deleteCookie(name) {
    const cookieName = encodeURIComponent(name);
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function showCookie(name) {
    if (document.cookie != "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#save').addEventListener('click', function(e) {
        e.preventDefault();

        const nameVal = document.querySelector('#name').value;
        const surnameVal = document.querySelector('#surname').value;

        setCookie('name', nameVal);
        setCookie('surname', surnameVal);
    });

    document.querySelector('#show').addEventListener('click', function(e) {
        e.preventDefault();
        alert(showCookie('name') + ' ' + showCookie('surname'))
    });
});
