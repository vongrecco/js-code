// var reg = new RegExp("pani?", "gi");

// var reg1 = /pani?/gi;

var tekst = "cat dog";
var reg = /cat/;
console.log(reg.test(tekst) === true); //bo cat znajduje się w tekście

var reg2 = /^cat$/;
console.log(reg2.test(tekst));

var tekst1 = "Ala oddaj kota";
var reg1 = /oddaj/;
console.log('1 '+reg1.test(tekst1));

var reg2 = /^oddaj$/;
console.log('1 '+reg2.test(tekst1));

//

var tekst3 = "TAurlal goryl po Urlach kolorowe korale...";
var reg3 = new RegExp("[A-Z]{2}[^\s]+");
console.log("2 "+ reg3.test(tekst3));

//

var tekst4 = "Numer1, Numer2, Numer3, Numer4, Numer";
var reg4 = /Numer[1-4A-C]/g;
console.log('3 ' + tekst4.match(reg4));

//////


var text3 = "Moj kod pocztowy to 24-212 Wzgórze";
var codeReg = /[0-9]{2}-[0-9]{3}/g;

var score = text3.match(codeReg);
console.log(score);

/////

var text4 = "To nie jest mój kod 33-124, tylko ten 21-223";
var codeReg1 = /[0-9]{2}-[0-9]{3}/g;

var score1 = text4.match(codeReg1);

console.log(score1);

if(score1){
	for(var x = 0; x < score1.length; x++){
		console.log(score1[x]);
	}
}


////

var text5 = "Piter Grecco";
var regName = /^[a-zA-Z{3,}\s[a-zA-Z]{3,}$/;
var score2 = text5.match(regName);
console.log(score2);


var text6 = "Piterek Greccosi";
var regName2 = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;

var score3 = text6.match(regName2);

if(score3){
	console.log("to prawda");
}
else{
	console.log("to nie prawda");
}


// 

var par = document.getElementById("paragraf");

console.log(par.childNodes[0].firstChild);