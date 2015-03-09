var sget = require("sget");

var temps = [];

var mon = sget("Enter the average temperature for Monday in degrees fahrenheit. ").trim();
temps.push(mon);

var tuse = sget("Enter the average temperature for Tuseday in degrees fahrenheit. ").trim();
temps.push(tuse);

var wed = sget("Enter the average temperature for Wednesday in degrees fahrenheit. ").trim();
temps.push(wed);

var thurs = sget("Enter the average temperature for Thursday in degrees fahrenheit. ").trim();
temps.push(thurs);

var fri = sget("Enter the average temperature for Friday in degrees fahrenheit. ").trim();
temps.push(fri);

var sat = sget("Enter the average temperature for Saturday in degrees fahrenheit. ").trim();
temps.push(sat);

var sun = sget("Enter the average temperature for Sunday in degrees fahrenheit. ").trim();
temps.push(sun);


console.log (temps);