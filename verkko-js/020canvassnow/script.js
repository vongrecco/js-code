const canvasElem = document.getElementById('can');

const cxt = canvasElem.getContext('2d');

// fillRect(x, y, width, height)	rysuje wypełniony prostokąt
// strokeRect(x, y, width, height)	rysuje obramowanie prostokąta
// clearRext(x, y, width, height)	czyści określony obszar i czyni go przezroczystym

cxt.fillRect(25,25,100,100);

//wycinamy jego srodek
cxt.clearRect(45,45,60,60);

//rysujemy obramowanie drugiego kwadratu
cxt.strokeRect(50,50,50,50);

// fillText("tekst",x,y) - która wypisuje wypełniony tekst w pozycji x, y
// strokeText("tekst",x,y) - która wypisuje obrysowany tekst w pozycji x, y

// font = "wartość" - opis wyglądu czcionki taki sam jaki stosujemy w CSS
// textAlign = "wartość" - wyrównanie tekstu w poziomie. Możliwe wartości to: start, end, left, right, center. Domyślną wartością jest start.
// textBaseline = "wartość" - Określa pionowe wyrównanie tekstu względem linii. Możliwe wartości to: top, hanging, middle, alphabetic, ideographic, bottom. Domyślną jest alphabetic.

const canvasElem1 = document.getElementById('canvasTestText');
const ctx = canvasElem1.getContext('2d');

ctx.font = "italic bold 30px Arial";
ctx.textBaseline = "middle";
ctx.fillText('Ala ma kota', 0, 30);

ctx.font = "italic bold 20px Arial";
ctx.textBaseline = "bottom";
ctx.strokeText('Ala ma kota', 30, 70);

ctx.font = "normal 10px Arial";
ctx.textBaseline = "top";
ctx.strokeText('Ala ma kota', 130, 80);

/// rysowanie sciezek

const canvasElem2 = document.getElementById('canvas2');
const c2 =canvasElem2.getContext('2d');

//rozpoczecie rysowania scezki
c2.beginPath();
c2.fill();//wypełanie ścieżki

// Do przesuwania piórka bez wyznaczania ścieżki służy metoda moveTo(x,y), która przesuwa punkt rysowania do punku x, y.

// Do rysowania linii wykorzystujemy metodę lineTo(x,y), która rysuje ścieżkę z aktualnej pozycji do pozycji x, y.

c2.beginPath();
c2.moveTo(35,10); //rysowanie zaczynamy od punktów 35,10 - tam więc przesuwamy nasze piórko
c2.lineTo(60,40);
c2.lineTo(10,40);
c2.lineTo(35,10);
c2.stroke();

c2.fillText('a',30,60);
c2.fillText('c',110,60);
c2.fillText('b',70,130);

let c = document.getElementById("bg");
let c2 = c.getContext('2d');



