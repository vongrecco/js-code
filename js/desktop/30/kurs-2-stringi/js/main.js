var text = "Ala ma kota, a kot ma Ale.";
console.log(text.length);
// Metoda charAt() służy do pobrania znaku na danej pozycji
console.log(text.charAt(2));
// Metoda charCodeAt() zwraca nam kod ASCII znaku na pozycji podanej w parametrze.
console.log(text.charCodeAt(0));

document.getElementById('val1').innerText = text.toUpperCase();
document.getElementById('val2').innerText = text.toLowerCase();

var text1 = "Ala ma kota, a kot ma ale";

// Sprawdzanie pozycji podtekstu za pomocą metody indexOf()
document.getElementById('val3').innerHTML = text1.indexOf("kot");

// Sprawdzanie pozycji podtekstu za pomocą metody i lastIndexOf()
document.getElementById('val4').innerHTML = text1.lastIndexOf("kot");

// Metoda substr(start, dlugosc) służy do pobierania kawałka tekstu.

document.getElementById('val5').innerHTML = "ten tekst ma " + text1.length + "liter, a zaczyna się od: " + text1.substr(3);

var text2 = "Ala ma kota, a kot ma ale";

// wycięte od 3 do 7
document.getElementById('val6').innerHTML = text2.substr(1, 7);

// Metoda substring(start, stop) ma bardzo podobne działanie co powyższa. Różnicą jest drugi parametr, który zamiast długości wyznacza miejsce końca pobieranego kawałka.
// jesli druga będzie mniejsza od pierwszej to zostaną zamienione
document.getElementById('val7').innerHTML = text2.substring(0, 6);

// jesli druga będzie mniejsza niz pierwsza to NIE ZOSTANĄ ZAMIENIONE
document.getElementById('val8').innerHTML = text2.slice(1, 5);

// Metoda replace(ciag_szukany, zamieniony) służy do zamiany szukanych kawałków tekstu na inny tekst.

var text3 = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;(";

var changeText = text3.replace(/Ala/g, 'Dzimirka');

document.getElementById('val9').innerHTML = text3;
document.getElementById('val10').innerHTML = changeText;

// padded with 0000

var moneyValue = 128;
moneyValue = moneyValue.toString();

var str = "" + moneyValue;
var pad = "000000";
var ans = pad.substring(0, pad.length - str.length) + str;

document.getElementById("val11").innerHTML = ans;