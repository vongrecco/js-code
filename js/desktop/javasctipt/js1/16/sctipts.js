var addN = Number( prompt("podaj liczbe men", " ") );
var start = 0;

while (start <= addN){
	start ++;

	// if(start > 100){
	// 	break;
	// }

	if (start%3 == 0){
		continue;
	}
	document.write(start + "<br>");

}