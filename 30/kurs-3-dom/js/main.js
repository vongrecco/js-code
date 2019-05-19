var p = document.querySelector('#paragraf');

console.log(p.parentNode);
console.log(p.childNodes[1]);
console.log(p.childNodes[1].firstChild);
console.log(p.lastChild);


// Właściwość	Opis
// nodeName	nazwa node
// nodeValue, textContent	wartość node (tylko dla nodów tekstowych)
// nodeType	typ node - zobacz niżej
// parentNode, parentElement	rodzic (parent), jeżeli istnieje
// children	lista dzieci - elementów html
// childNodes	lista dzieci danego obiektu (child nodes)
// firstChild	pierwsze dziecko (first child)
// lastChild	ostatnie dziecko (last child)
// previousSibling	zwraca poprzedni nod na tym samym poziomie
// nextSibling	zwraca następny nod na tym samym poziomie
// attributes	lista atrybutów elementu
// ownerDocument	dokument zawierający ten element


function markRow(id) {
    var tab = document.getElementById(id);
    var td = tab.getElementsByTagName('td');

    for (var x=0; x<td.length; x++) {
        td[x].addEventListener('mouseover', function() {
            this.parentNode.classList.add('mark'); //ustawiamy klase hover dla TR - dzięki niej zmienimy wygląd dla td
        });
        td[x].addEventListener('mouseout', function() {
            this.parentNode.classList.remove('mark');
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    markRow('tabelka');
});

// Aby pobrać atrybut elementu możemy skorzystać z metody getAttribute(atrybut). Atrybut może istnieć i być pusty,
// jednak nie przeszkadza to by sprawdzić jego istnienie:

var p = document.getElementById('title');

console.log('Wartość atrybutu "title" wynosi: ' +p.getAttribute('title'));

// ustawienie wartosci atrybutu
// var td = "";
// td.setAttribute('bgColor','red');

// usowanie 

// td.removeAttribute('bgColor');
// td.className = 'czerwona';


p.innerHTML = 'To nie jest <strong>mało</strong> ważny tekst';
console.log(p.childNodes[1]) //wskazuje na drugie dziecko noda czyli <strong>
console.log(p.childNodes[1].firstChild.textContent) //wskazuje tekst "mało"
console.log(p.lastChild) //wskazuje słowo "tekst"


// tworzenie i dodwanie nowych elementow

var addNewElement = document.createElement('div');
addNewElement.id = "element";
addNewElement.class = "element";
addNewElement.style.width = "200px";
addNewElement.style.height = "100px";
addNewElement.style.backgroundColor = "#b2b2b2";

var body = document.getElementsByTagName('body')[0]; //pobieramy body
body.appendChild(addNewElement); //wstawiamy element do drzewa dokumentu


// dodawanie elementu przed innym

function insertBefore(){
	var before = document.getElementById('beforeTest'),
		strong = before.firstChild,
		newNode = createTextNode("whooola jest nowym nodem");

	before.insertBefore(newNode, strong);
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('guzik').addEventListener('click', insertBefore);
});







