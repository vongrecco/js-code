var increment = (function (){
	var clickCount = 0;

	return function(){
		return ++clickCount;
	};
})();

console.log(increment);



