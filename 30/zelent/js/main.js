
var numer = Math.floor(Math.random() * 5) + 1;
var timer1 = 0;

function ustawSlide(nrslajdu){
    clearTimeout(timer1);
    var numer = nrslajdu;
    setTimeout("zmienSlide()", 500);
}

function zmienSlide(){
    
    numer++; if(numer>5) numer = 1;
    console.log(numer);

    var plik = "<img src=\"img/slide" + numer + ".png\" />";

    document.getElementById("slider").innerHTML = plik;


    timer1 = setTimeout("zmienSlide()", 3000);

}
