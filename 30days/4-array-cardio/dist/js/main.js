

var personList = [
	{ first: 'Ola', last:'Dzido', year: 1992, obrona: 2000},
	{ first: 'Anna', last:'Lipiec', year: 1994, obrona: 2004}, 
	{ first: 'Jonna', last:'Wrzesien', year: 1995, obrona: 2005}, 
	{ first: 'Kasia', last:'Maj', year: 1996, obrona: 2004}, 
	{ first: 'Ada', last:'Maj', year: 1993, obrona: 2001}, 
	{ first: 'Paula', last:'Marzec', year: 1992, obrona: 2000}, 
	{ first: 'Anna', last:'Luty', year: 1991, obrona: 2012}, 
	{ first: 'Monika', last:'Kwiecien', year: 1989, obrona: 2012}
];

var secondName = ['Ola ,Dzido','Anna, Lipiec', 'Jonna, Wrzesien', 'Kasia, Maj', 'Ada, Maj', 'Paula, Marzec'];

// born in 90 - 93

var born = personList.filter(function(personsListf){
	if(personsListf.year >= 1990 && personsListf.year < 1993){
		return true;
	}
})

console.table(born);

// last and first name

var fullName = personList.map(personLists => personLists.first + ' ' + personLists.last);

console.log(fullName);

// 3 sort from oldest to younges

// var sortowanie = personList.sort(function(a,b){
// 	if(a.year > b.year){
// 		return 1;
// 	}else{
// 		return -1;
// 	}
// });

var sortowanie = personList.sort((a,b) => a.year > b.year ? 1 : -1);

console.table(sortowanie);


// od narodzin do obrony

var totalYears = personList.reduce((total, personLists) =>{
	return total + (personLists.obrona - personLists.year);
}, 0);

console.log(totalYears);


// sort second array by second name

var alpha = secondName.sort(function(lastOne, nextOne){
	console.log(lastOne);
});
