var button = document.getElementById('click'),
	textArea = document.getElementById('textarea');
	text1 = " Click",
	text2 = " mousedown",
	text3 = " mouseup",
	text4 = " mouseover",
	text5 = " mousemove",
	text6 = " mouseout";

button.addEventListener('click', function(){
	textArea.value += text1;
});

button.addEventListener('mousedown', function(){
	textArea.value += text2;
});

button.addEventListener('mouseup', function(){
	textArea.value += text3;
});

button.addEventListener('mouseover', function(){
	textArea.value += text4;
});

button.addEventListener('mousemove', function(){
	textArea.value += text5;
});

button.addEventListener('mouseout', function(){
	textArea.value += text6;
});

//////