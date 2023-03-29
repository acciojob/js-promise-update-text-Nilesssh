//your JS code here. If required.
myGreeting(){
	return document.getElementById("output").innerHTML = "Hello, world!"
}

const myTimeout = setTimeout(myGreeting, 1000);