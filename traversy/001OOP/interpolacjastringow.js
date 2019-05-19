1. Do tej pory znaliśmy dwa sposoby zapisu stringów:

a)
const var1 = 1;
const var2 = 2;

const text1 = "Ala ma " + var1 + " kota i " + var2 + " psy.";
const text2 = 'Ala ma ' + var1 + ' kota i ' + var2 + ' psy.';

b)

const html  = "<div class=\"module\">";
      html += "    <div class="module-header">";
      html += "        <h2 class="module-title">" + title + "</h2>";
      html += "    </div>";
      html += "    <div class="module-content">";
      html += "         <div>" + content + "</div>";
      html += "    </div>";
      html += "</div>";


c)

const html  = '\
<div class=\"module\"> \
   <div class="module-header"> \
       <h2 class="module-title">' + title + '</h2> \
   </div> \
   <div class="module-content"> \
        <div>' + content + '</div> \
   </div> \
</div>';

2. W ecmascript 2015 wprowadzone "backtick"

const var1 = 1;
const var2 = 2;

const text = `Ala ma ${var1} kota i ${var2} psy.`;

// Bezpośrednio do takiego tekstu możemy wstawiać kod JavaScript, w tym wywoływanie funkcji, zmienne itp. Jak widzisz powyżej robi się to za pomocą znaku dolara i klamer ${....}, między które trafia kod JavaScript:

const dayData = {
    temp : 23,
    weather : 'pogodna'
}

function calculateWeather() {
    return "bardzo ładna :)"
}

const text = `
    Dzisiaj jest ${ (new Date()).getFullYear() }.
    Na dworze jest temperatura ${ dayData.temp }
    A pogoda jest ${ calculateWeather() }
`;

// Ta metoda tworzenia ciągów znaków idealnie się nadaje do tworzenia kawałków kodu html. To z czym się wcześniej męczyliśmy, teraz wygląda o wiele lepiej:

const text = `
    <div class="module">
        <div class="module-header">
            <h2 class="module-title"> ${title} </h2>
        </div>
        <div class="module-content">
            <div>${content}</div>
        </div>
    </div>`;

// 3. dodatkowe metody dla stringow 

startsWith(str)	sprawdza czy dany tekst zaczyna się od str
endsWith(str)	sprawdza czy dany tekst kończy się str
includes(str)	sprawdza czy dany tekst zawiera w sobie str
repeat(x)	zwraca nowy string będący powtórzeniem x razy danego stringu

const text = "Bardzo lubię czerwone jagódki";

text.startsWith("Bardzo"); //true
text.startsWith("lubię"); //false

text.endsWith("jagódki"); //true
text.endsWith("czerwone"); //false

text.includes("Bardzo"); //true
text.includes("jagódki"); //true
text.includes("czerwone"); //true
text.includes("pietruszkę"); //false

console.log("siano".repeat(3)); //sianosianosiano
console.log("G" + "o".repeat(10) + "l!"); //Gooooooooool!


// 4. Funkcje tagujące

// 5. Destrukturyzacja obiektów