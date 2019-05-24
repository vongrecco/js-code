var zdjecia = new Array("africans", "bird", "cat", "eagle", "elephants", "fall", "forest", "hands", 
                        "monkeys", "people", "river", "rocks", "someone", "view", "waterfall");

const MINI = "zdjecia/mini/";
const MAXI = "zdjecia/";


function losuj(){
    var tab = new Array();
    for(var i=0; i<3; i++){
        tab[i] = Math.floor(Math.random()*zdjecia.length);
        var j = i;
        while(tab[j-1] >= 0){
            if(tab[j-1] == tab[i]){
                tab[i] = Math.floor(Math.random()*zdjecia.length);
                j=i;
            }else{
                j--;
            }
        }
    }
    return tab;
}

function uaktualnij(){
    var img = document.getElementsByTagName("img");
    var nowe = losuj();
    for(var i=0; i<img.length; i++){
        img[i].src = MINI + zdjecia[nowe[i]] + ".jpg";
        img[i].alt = zdjecia[nowe[i]];
    }
}

function popup(name){
    var param = "status=0, location=0, menubar=0, resizable=no, toolbar=0, scrollbars=no, width=640, height=480";
    window.open(MAXI + name + ".jpg", "zdjecia", param);
}

window.onload = function(){
    uaktualnij();
    
    var link = document.getElementsByTagName("img");
    for(var i=0; i<link.length; i++){
        link[i].onclick = function(){
            popup(this.alt);
        }
    }
    
}