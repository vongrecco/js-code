// pobranie biezeoncej daty
var data = new Date();
document.write(data);

document.write('<br>');

//okreslina data
var dateOfBirth = new Date(1980, 0, 13, 11, 20, 0, 0);
document.write(dateOfBirth);

document.write('<br>');

var dataDay = data.getDay();
document.write(dataDay);

document.write('<br>');

// Example : The following example returns 1980
var year = new Date(1980, 0, 13, 11, 20, 0, 0).getFullYear();
document.write(year);

document.write('<br>');

// getMonth() - Returns the month number (from 0-11)

document.write('<br>');

// Example : The following example returns 0 (for January)
var month = new Date(1980, 0, 13, 11, 20, 0, 0).getMonth();
document.write(month);

document.write('<br>');

// You can use the following code to get the month name from the month number in Javascript. The following example returns January.
function getMonthNameFromNumber(monthNumber) 
{ 
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; return monthNames[monthNumber];
}

var monthName = getMonthNameFromNumber(new Date(1980, 0, 13, 11, 20, 0, 0).getMonth());
document.write(monthName);

// getDate() - Returns the day of the month (from 1-31)

document.write('<br>');

// Example : The following example returns 13
var dayOfMonth = new Date(1980, 0, 13, 11, 20, 0, 0).getDate();
document.write(dayOfMonth);

// getDay() - Returns the day number of the week (from 0-6). 0 is sunday, 1 is monday and so on.

document.write('<br>');

// Example : The following example returns 0
var dayOfWeek = new Date(1980, 0, 13, 11, 20, 0, 0).getDay();
document.write(dayOfWeek);

// You can use the following code to get the day of the week from the day number in Javascript. The following example returns Sunday.
function getWeekDayNameFromNumber(dayNumber) 
{ 
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; return weekDays[dayNumber];
}
document.write('<br>');

var weekdayName = getWeekDayNameFromNumber(new Date(1980, 1, 13, 11, 20, 0, 0).getDay());
document.write(weekdayName);

// You also have the following methods that return the time parts of the date object
// getHours() - Returns the hour (from 0-23)
// getMinutes() - Returns the minutes (from 0-59)
// getSeconds() - Returns the seconds (from 0-59)
// getMilliseconds() - Returns the milliseconds (from 0-999)
document.write('<br>');

// How to convert date in javascript to dd/mm/yyyy format
function formatDate(date) 
{ 
	var day = date.getDate(); 
	if (day = 10) { day = "0" + day; } var month = date.getMonth() + 1; 
	if (month = 10) { month = "0" + month; } 
	var year = date.getFullYear(); return day + "/" + month + "/" + year;
}
document.write('<br>');

document.write(formatDate(new Date()));

// If you don't want ZERO (0) before a single digit month or day number, then modify the formatDate() function as shown below.
// function formatDate(date) 
// { var day = date.getDate(); var month = date.getMonth() + 1; var year = date.getFullYear(); return day + "/" + month + "/" + year;
// }
