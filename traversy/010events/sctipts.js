// 1. click

let click = document.getElementById("click");

click.addEventListener('click', function(){
    console.log('click');
});

click.onclick = function(){
    console.log('click 2');
};

// -------------------------------------------

// 2. dbclick

// Execute a JavaScript when a <p> element is double-clicked:

// -------------------------------------------

// 3. animationstart

// Do something with a <div> element when a CSS animation has started:
var x = document.getElementById("myDIV");
// Code for Chrome, Safari and Opera
// x.addEventListener("webkitAnimationStart", myStartFunction);
// Standard syntax
// x.addEventListener("animationstart", myStartFunction);

// -------------------------------------------

// 3. animationiteration 

// Do something with a <div> element when a CSS animation is repeated:
var x = document.getElementById("myDIV");
// Code for Chrome, Safari and Opera
// x.addEventListener("webkitAnimationIteration", myRepeatFunction);
// Standard syntax
// x.addEventListener("animationiteration", myRepeatFunction);
// -------------------------------------------

// 4.animationend 
// Do something with a <div> element when a CSS animation has ended:
var x = document.getElementById("myDIV");
// Code for Chrome, Safari and Opera
// x.addEventListener("webkitAnimationEnd", myEndFunction);
// Standard syntax
// x.addEventListener("animationend", myEndFunction);
// -------------------------------------------

// 5. blur Execute a JavaScript when a user leaves an input field: 
// 6. onfocus Execute a JavaScript when an input field gets focus, jest w nim aktywny kursor
// 7. selected Execute a JavaScript when some text has been selected:
// 8.onfocusout Execute a JavaScript when an input field is about to lose focus:

// object.onblur = function(){myScript};
// object.addEventListener("blur", myScript);


// 9. cut / oncut kiedy element jest wycinany
// 10. oncopy / copy kiedy el jest kopiowany
// a)paste


// 11. change - The onchange event occurs when the value of an element has been changed.

// x.on('changemy', myFunction);

// function myFunction() {
//   var x = document.getElementById("mySelect").value;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }

// 12. drag/ drop/ 


// 13 . keys

// onkeydown Execute a JavaScript when a user is pressing a key:
// keypress - Execute a JavaScript when a user presses a key:
// keyup Execute a JavaScript when a user releases a key:

// object.addEventListener("keydown", myScript);

// 14. mousepress
// a) mousedown Execute a JavaScript when pressing a mouse button over a paragraph:
// b) mouseenter Execute a JavaScript when moving the mouse pointer onto an el:
// c) mouseleave Execute a JavaScript when leave the mouse pointer onto an el:
// d) mousemove Execute a JavaScript when move the mouse pointer onto an el:


// Video

// a) play Execute a JavaScript when a video has started to play:
// b) onplaying Execute a JavaScript when a video is ready to start after having been paused:

// window

// a) resize - Execute a JavaScript when a <div> element is being scrolled:


// scroll
// a) wheel When the user rolls the mouse wheel over a <div> element
// b) scroll Execute a JavaScript when a <div> element is being scrolled:


// c) scrollY - The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically

// scroll down up

 function scrollDirection(){
    let previousScroll = window.scrollY;
    window.addEventListener('scroll', function(){
        window.scrollY > previousScroll ? console.log('down') : console.log('up');
        previousScroll = window.scrollY;    
    });
}

scrollDirection();


// clientX

// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate

document.querySelector('body').addEventListener('mousemove',showCoords);
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  console.log(x, y)
}

// offsetX - Click inside a DIV and output the coordinates of the click, relative to the DIV element:
// offsetY - Click inside a DIV and output the y-coordinate of the click, relative to the DIV element:
// pageX, pageY The pageX property returns the horizontal coordinate (according to the document) of the mouse pointer when a mouse event was triggered. The document is the web page.
// screenX, screenY Get coordinates of the mouse pointer, relative to the screen, when the mouse button is clicked on an element: