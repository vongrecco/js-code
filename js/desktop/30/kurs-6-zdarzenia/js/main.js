// blur    odpalane, gdy obiekt przestał być aktywny (np. input)
// change  odpalane, gdy obiekt zmienił swoją zawartość (np. pole tekstowe)
// click   odpalane, gdy obiekt został kliknięty (np. input)
// dblClick    odpalane, gdy podwójnie klikniemy na obiekt (np. input)
// focus   odpalane, gdy obiekt stał się wybrany (np. pole tekstowe)
// keyDown odpalane, gdy został naciśnięty klawisz na klawiaturze
// input   podobne do powyższego, ale odpalane synchronicznie w czasie trzymania klawisza (np. przytrzymanie klawisza A w polu tekstowym)
// keyUp   odpalane gdy puścimy klawisz na klawiaturze
// load    odpalane, gdy obiekt został załadowany (np. cała strona)
// mouseOver   odpalane, gdy kursor znalazł się na obiekcie
// mouseOut    odpalane, gdy kursor opuścił obiekt
// resize  odpalane, rozmiar okna przeglądarki jest zmieniany
// select  odpalane, gdy zawartość obiektu została zaznaczona
// submit  odpalane, gdy formularz został wysłany
// unload  odpalane, gdy użytkownik opuszcza dana stronę

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM został wczytany");
});

//// 

function showMeText(){
    console.log('zdarzenie jako właściwość obiektu');
}

var element = document.getElementById('przycisk');

element.onclick = showMeText;

////


document.getElementById('przycisk2').onclick = function(){
    console.log('podpiecie funkcji pod referencje');
};


//// wiele obiektow

var p = document.querySelectorAll('p');

for (i=0; i<p.length; i++) {
    p[i].onclick = function () {
        if (this.className.indexOf(' mark ') !== -1) {
            this.className += ' mark ';
        }
    }
}

// kilka metod, jeden klik

var element3 = document.getElementById('przycisk3');

// element3.addEventListener('click', showme);
element3.addEventListener('click', function(){
	this.style.color = 'red';
});