
			var ball = document.createElement("img");
			document.body.appendChild(ball);

			ball.src = "ball.png";
			ball.style.width = "80px";
			ball.style.left = "0px";
			ball.style.top = "0px";

			ball.style.position = "absolute";

			var boundX = window.innerWidth;
			var boundY = window.innerHeight;

			var speed = 10;
			var x = 1;
			var y = 1;

			function screensaver () {
				var posX = ball.offsetLeft;
				var posY = ball.offsetTop;

				if(posX + ball.offsetWidth > boundX || posX < 0){
					x *= -1;
				}

				if(posY + ball.offsetHeight > boundY || posY < 0){
					y *= -1;
				}

				ball.style.left = ball.x + (speed * x) + 'px';
				ball.style.top = ball.y + (speed * y) + 'px';

				console.log(posX);

				setTimeout(screensaver, 20);
			}

			screensaver();