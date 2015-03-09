var sget = require("sget");

var sumOfTemps = 0;

var temps = [];

var mon = sget("Enter the average temperature for Monday in degrees fahrenheit. ").trim();
temps.push(Number(mon));

var tuse = sget("Enter the average temperature for Tuseday in degrees fahrenheit. ").trim();
temps.push(Number(tuse));

var wed = sget("Enter the average temperature for Wednesday in degrees fahrenheit. ").trim();
temps.push(Number(wed));

var thurs = sget("Enter the average temperature for Thursday in degrees fahrenheit. ").trim();
temps.push(Number(thurs));

var fri = sget("Enter the average temperature for Friday in degrees fahrenheit. ").trim();
temps.push(Number(fri));

var sat = sget("Enter the average temperature for Saturday in degrees fahrenheit. ").trim();
temps.push(Number(sat));

var sund = sget("Enter the average temperature for Sunday in degrees fahrenheit. ").trim();
temps.push(Number(sund));

// for(var i=0, len=temps.length; i<len; i++){
//     sumOfTemps += temps[i][1];
// }

console.log (temps);