'use strict';

// 1. document.getElementById('element') - pobiera element po id

// 2. document.getElementsByClassName('klasa') - pobiera element po klasie

// 3. document.getElementsByTagName('tag') - pobiera element po tagu np.: 'td'

// 4. document.querySelector('element') - działa jak $ w jquery, pobiera pierwszy znaleziony element lub null, aby określić, że szukamy drugiego elementu podajemy po selektorze document.querySelector('element')[1]

// document.querySelectorAll('elements') - zwraca kolekcję elementów

// Bo kolekcja mimo, że przypomina tablicę nią nie jest. Jak po pobraniu zbadasz taką kolekcję w debugerze okaże się, że ma sporo metod i właściwości, ale i niektórych brak.

// Pętla po kolekcji elementów.Aby wywołać zdarzenie na danym elemencie należy zastosować pętle for, lub też for of:

const divs = document.querySelectorAll('.module');

for (let i=0; i<divs.length; i++) {
    divs[i].style.color = "red";
}

const divs = document.querySelectorAll('.module');

for (const div of divs) {
    div.style.color = "red";
}

//to zadziała tylko w nowych przeglądarkach więc uważaj
document.querySelectorAll('.module').forEach(function(el) {
    el.style.color = "blue";
});