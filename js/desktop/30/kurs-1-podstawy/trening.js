function sprawdz(){
    var var1 = document.getElementById('pole').value;
    console.log((var1 > 0)?"To jest większe od zera":"a to jest mniejsze od 0");
}

var tablica = ['a','s','d','f','g','h','j','k','l','m','n'];

for(var i = 0; i <tablica.length; i++){
    document.write("tablica: " +tablica[i] +'<br>');
}

var tab = ['a','s','d','f','g','h','j','k','l','m','n'];

tab.forEach(function(el){
    console.log(el);
});


[2, 5, 9].forEach(function(element, index, array) {
    console.log("indeks [" + index + "] w tablicy [" +array+ "] to " + element);
});


var jacek = function(arg1, arg2){
    var summary = arg1 + arg2;
    console.log(summary);
}

jacek(10, 11);

(function(){
    console.log("to je anonim funkcjojn");
})();

///

function regularExpression(){
var firstInput = document.getElementById("firstInput").value;
console.log(firstInput);
var span = document.querySelector('.message');

var regEx = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
if(regEx.test(firstInput)){
    span.innerHTML = 'Git, nie jebnąłeś się!';
}
else{
    span.innerHTML = "Chujowieńko, coś źle wpisałeś"
}
// console.trace();
}

document.getElementById("click1").addEventListener('click', regularExpression);
