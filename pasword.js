var sget = require("sget");

enterPassword();

function enterPassword(){
	var pasword = sget("Please enter a pasword at least 10 characters long containing at least one capital letter or '!'.");
	if (pasword === pasword.toLowerCase() && pasword === pasword.replace(/!/g, '')){
		console.log ("The password you entered doesn't meet thte requirements. Please try again.");
		enterPassword();
	} else{
		console.log ("Your password has been accepted.");
	}
}	