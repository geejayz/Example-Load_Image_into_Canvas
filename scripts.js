//Use window.unload to ensure the html page has loaded before
//the JavaScript is run

window.onload = function(){


//Get a reference to the canvas
var canvas = document.querySelector("canvas");

//Get a reference to the canvas's drawing surface
var drawingSurface = canvas.getContext("2d");

//Create a variable to hold our image
var myImage = new Image();

//Add a listener to the image to call
//another function once the image has loaded
myImage.addEventListener("load", loadHandler, false);

//Assign the image file to the image source property
myImage.src = "images/monster.png";


function loadHandler() {
	//draw the image onto the canvas surface
	drawingSurface.drawImage(
		myImage,
		60,0,256,256,
		0,0,64,64);
	
	// drawingSurface.drawImage (
		// Image Name => 	myImage,
		// Source =>		x,y,h,w,
		// Destination =>	x,y,h,w
		
	// );
	
}


console.log('Loaded');

};
