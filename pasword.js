var sget = require("sget");

enterPassword();

function enterPassword(){
	var password = sget("Please enter a password at least 10 characters long containing at least one capital letter or '!'.").trim();
	if (password.length < 10){
		console.log("Your password is not long enough! Try again");
		return enterPassword();
	}
	if (password === password.toLowerCase() && password === password.replace(/!/g, '')){
		console.log ("The password you entered doesn't meet the requirements. Please try again.");
		return enterPassword();
	} else{
		console.log ("Your password has been accepted.");
	}
}	