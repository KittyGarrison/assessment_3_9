var sget = require("sget");

var name = sget("You have been given a job as a zoo keeper. You are responsible for a lion. What is his name? ")

careForLion();

function careForLion() {
	var response = sget("How will you care for %s ?\n 1- feed him\n 2- pet him\n 3- give him a bath\n 4- sing him a song\n 5- go home ",name);
	switch(response) {
		case "1":
		console.log("%s eats his food fast, poor zebra!",name);
		careForLion();
		break;
		default:
		console.log("Goodbye")
		break;
	}
}