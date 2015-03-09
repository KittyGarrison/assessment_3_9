var sget = require("sget");

var pasword = sget("Please enter a pasword at least 10 characters long containing at least one capital letter or '!'")
if (pasword === pasword.toLowerCase()){
	console.log ("the password you entered doesn't meet thte requirements")
}