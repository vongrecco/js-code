
var canvas = document.getElementById('canvas1');
if (canvas.getContext){
    var c = canvas.getContext('2d');

    //rysujemy niebieski kwadrat
    c.fillRect(25,25,100,100);
    //wycinamy jego srodek
    c.clearRect(45,45,60,60);

    //rysujemy obramowanie drugiego kwadratu
    c.strokeRect(50,50,50,50);
}


///



var canvas = document.querySelector('#draw');

var ctx = canvas.getContext('2d');