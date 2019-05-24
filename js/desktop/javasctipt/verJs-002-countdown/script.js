function timer(){
	var classTimer = document.querySelector('.timer');
	var date = new Date();
	var	seconds = date.getSeconds(),
		minutes = date.getMinutes(),
		hours   = date.getHours();

	var length = seconds.length;
	classTimer.innerHTML=hours+":"+minutes+":"+seconds;
}

setInterval(timer, 1000);
