var sget = require("sget");

var numbers = sget("Enter three numbers. (ex. 1,2,3) ");
var numArray = numbers.trim().split(',');
var numSorted = (numArray.sort(function(a,b){
		return b-a
	}));

console.log ("Your numbers from gratest to smallest are " + numSorted)
