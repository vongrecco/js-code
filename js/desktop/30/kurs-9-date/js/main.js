var a = 56.4,
	b = 76.8;

document.write( Math.min(a,b)  + '<br>');
document.write( Math.max(a,b)  + '<br><hr>');

console.log( Math.PI );
console.log( Math.round(a) );

for(var i = 0; i < 5; i++){
	// document.write(Math.random() + ' ,<br> ');
	document.write(Math.round(Math.random()*10) + ' <br> ');
}