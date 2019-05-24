var liczba = prompt('Podaj liczbe');

if(liczba==10){
	alert( "liczba to 10" );
}

else if(liczba == 3 || liczba == 6){
	alert( "liczba to 3 albo 6" );
}

else if(liczba >= 1 && liczba < 3){
	alert( " zdobyłeś 2 ptk ");
}

else if( liczba > 3 && liczba < 10){
	alert( " zdobyłeś 1 ptk ");

}
else{
	alert( " nie masz ptk!" );
}