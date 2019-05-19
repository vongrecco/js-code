var string = "Lorem ipsum dolor sit amet, consectetur adipis";

var stringArray = string.split("");

function textWrite(){

	if(stringArray.length > 0 ){
		document.getElementById('display').innerHTML += stringArray.shift();
	} else{
		document.getElementById('display').innerHTML = "";
		stringArray = string.split("");
	}
	setTimeout(textWrite, 50);
}


textWrite();