const http = require("http");

const SECRET = "CIGAR";

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	const GUESS = req.url.split('q=')[1];
	console.log(GUESS)

	let ans = "response ";
	try {
	for (let i=0; i<5; i++) {
		if (GUESS[i] == SECRET[i]) {
			ans += "g"
		}
		else if (SECRET.includes(GUESS[i]) == false) {
			ans += "b"
		}
		else {
			ans += "y"
		}

	}
}
	catch(err) {}

    const feedback = ans;

	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);