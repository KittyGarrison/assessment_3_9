var sget = require("sget");

var temps = [];
var mon = sget("Enter the average temperature for Monday in degrees fahrenheit. ").trim();
temps.push(mon);
console.log (temps);