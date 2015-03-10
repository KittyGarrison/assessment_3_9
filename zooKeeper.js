var sget = require("sget");

var name = sget("You have been given a job as a zoo keeper. You are responsible for a lion. What is his name? ").trim();

careForLion();

function careForLion() {
	var response = sget("How will you care for " + name + " ?\n 1- feed him\n 2- pet him\n 3- give him a bath\n 4- sing him a song\n 5- go home ").trim();
	// var response = getResponse.trim();
	switch(response) {
		case "1":
			console.log("%s eats his food fast, poor zebra!\n",name);
			return careForLion();
			break;
		case "2":
			console.log("%s falls asleep with a smile.\n",name);
			return careForLion();
			break;
		case "3":
			console.log("%s hates baths, you get malled!\n",name);
			return careForLion();
			break;
		case "4":
			console.log("%s looks like he's dancing\n",name);
			return careForLion();
			break;
		case "5":
			console.log("Goodbye");
			break;

		default:
			console.log("That is not a valid choice please enter 1-5\n");
			return careForLion();
			break;
	}
}

// console.log("%s falls asleep with a smile.",name);
// console.log("%s hates baths, you get malled!",name);
// console.log("%s looks like he's dancing",name);
