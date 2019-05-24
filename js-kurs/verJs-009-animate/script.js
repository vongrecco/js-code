var colors = ['red', 'green', 'orange', 'violet'];

function circleAnim(event){
	var circle = document.createElement('div');
	circle.setAttribute("class", "circle");
	document.body.appendChild(circle);

	circle.style.left = event.clientX + "px";
	circle.style.top = event.clientY + "px";

	circle.style.transition = "all .4s linear 0s";

	// circle.style.border-color
	var color = colors[Math.floor(Math.random() * colors.length)];
	circle.style.borderColor = color;
	circle.style.left = circle.offsetLeft -20 + "px";
	circle.style.top = circle.offsetTop +20 + "px";
	circle.style.top = event.clientY + "px";
	circle.style.width = "50px";
	circle.style.height = "50px";
	circle.style.opacity = 0;
}

document.onmousemove = circleAnim;