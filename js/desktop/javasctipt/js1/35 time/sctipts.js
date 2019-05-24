var intervalID;

function startClock(){
	intervalID = setInterval(getCurrentDayTime, 1000);
}

function stopClock(){
	clearInterval(intervalID);
}

function getCurrentDayTime(){
	document.getElementById('time').innerHTML = new Date();	
}

getCurrentDayTime();

document.write('<br>');
// COUNTDOWN 

function startTime(controlId){
	var control = document.getElementById(controlId);
	var seconds = control.value;

	seconds = seconds - 1;

	if(seconds == 0){
		control.value = "Gotowe";
		return;
	}

	else{
		control.value = seconds;
	}

	intervalId = setTimeout(function(){ startTime("txtBox") }, 1000);
}

function stopTime(){
	clearTimeout(intervalId);
}