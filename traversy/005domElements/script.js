Changing HTML Elements

el.innerHTML =  new html content	Change the inner HTML of an element
el.attribute = new value	Change the attribute value of an HTML element
el.setAttribute(attribute, value)	Change the attribute value of an HTML element
el.style.property = new style	Change the style of an HTML element

Example:

document.getElementById("myImage").src = "landscape.jpg";
document.getElementById("p1").innerHTML = "New text!";
document.getElementById(id).style.property = new style;
document.getElementById("p2").style.color = "blue";



Adding and Deleting Elements

document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(element)	Replace an HTML element
document.write(text)	Write into the HTML output stream

document.body	Returns the <body> element
document.domain	Returns the domain name of the document server
document.URL	Returns the complete URL of the document
document.title	Returns the <title> element

btn.addEventListener("click", function() {
    this.style.backgroundColor = "#4BA2EA";
    this.style.fontSize = "1.6rem";
    this.style.borderRadius = "3rem";
    this.style.color = "#F7F781";
});

el.style.fontSize = "1rem";
el.style['font-size'] = "1rem";

el.style.backgroundColor = "rgba(255,255,255,0.5)";
el.style['background-color'] = "rgba(255,255,255,0.5)";


DOM:


From the HTML above you can read:

<html> is the root node
<html> has no parents
<html> is the parent of <head> and <body>
<head> is the first child of <html>
<body> is the last child of <html>
and:

<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings

Nasz html składa się ze składowych - nodów.
Część z nich jest elementami html (div, p, strong i span).
Wszystkie natomiast są nodami - div, p, tekst Mała, strong, tekst Ala, tekst mała, span, tekst kota.

text.parentElement //wskazuje na nadrzędny nod będący elementem - div.text-cnt
text.parentNode //wskazuje na nadrzędny nod - div.text-cnt
text.firstChild //pierwszy node - w naszym przypadku to tekst "Mała "
text.lastChild //ostatni node - "" - html jest sformatowany, wiec ostatnim nodem jest znak nowej linii
text.firstElementChild //pierwszy element - <strong style="color:red">Ala</strong>
text.lastElementChild //ostatni element - <span style="color:blue">kota</span>
text.children; //[strong, span] - kolekcja elementów
text.children[0] //wskazuje na 1 element - <strong style="color:red">Ala</strong>
text.childNodes //[text, strong, text] - kolekcja wszystkich dzieci - nodow
text.childNodes[0] //"Mała"
text.nextSibling //następny węzeł
text.previousSibling //poprzedni węzeł
text.nextElementSibling //następny brat-element
text.previousElementSibling //poprzedni brat-element
const module = this.closest('.module'); odnajduje najbliższy elementowi element który pasuje do selektora:


	.firstChild
	.firstElementChild
	.lastChild & .lastElementChild

	Siblings
	.nextSibling
	.nextElementSibling
	.previousSibling
	.previousElementSibling

	Create Elements
	.createElement()
	.createTextNode()
	.appendChild()

	Insert Created Elements Into the DOM
	.insertBefore()﻿
ĄDZANIE CSS

add("nazwa-klasy")	dodawanie klasy
remove("nazwa-klasy")	usuwanie klasy
toggle("nazwa-klasy")	przełączanie (jak nie ma to dodaje, jak jest to usuwa) klasy
contains("nazwa-klasy")	sprawdza czy element ma taką klasę

element.style.setProperty('--ml', Math.random() * 300 + "px");


element.classList.add("mystyle");

wazny przykład 

target

tworząc funckję:

a.addEventListener('click', function(e){
	console.log(e.target) - wskazuje zawsze aktualnie kliknięty elemenent!
})