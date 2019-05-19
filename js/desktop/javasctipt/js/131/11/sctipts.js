// Napisz program, który będzie podawał cenę za 1 sztukę w zależności od zamówionej
// liczby sztuk. Od 1 do 99 szt. włącznie cena wynosi 9,99 zł. Od 100 sztuk w górę cena
// wynosi 8,99 zł. Program, który spełnia podane założenia, ma postać:

document.write("<h1>11</h1>");

var waluta = "zł";
var question = prompt('Ile książek', '');
var cena = "cena za sztukę to:";
var ileZaSztuke = question < 100 ? 9.99 : 8.99;

document.write(cena + ' ' + ileZaSztuke + waluta);