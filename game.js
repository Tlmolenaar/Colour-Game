var numberOfSquares = 6;
var colours = generateRandomColours(numberOfSquares);
var squares = document.querySelectorAll(".square");
var goal = goalColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6; 
		reset();
	});
}

function reset (){
	colours = generateRandomColours(numberOfSquares);
	//pick a new colour from array
	goal = goalColour();
	//change colours of square
	colourDisplay.textContent = goalColour();
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colours";
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colours[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "#steelblue";
	
}

resetButton.addEventListener("click", function(){
	//generate all new colours
	colours = generateRandomColours(numberOfSquares);
	//pick a new colour from array
	goal = goalColour();
	//change colours of square
	colourDisplay.textContent = goalColour();

	for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colours[i];
	}
	h1.style.background = "#steelblue";
	this.textContent = "New Colours";
	messageDisplay.textContent = "";
});

colourDisplay.textContent = goal;

for(var i = 0; i < squares.length; i++){

	squares[i].style.background = colours[i];

	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.background

		if(clickedColour === goal){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
			h1.style.background = clickedColour;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColours(colour){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colour;
	}
}

function goalColour(){
	var random = Math.floor(Math.random() * colours.length)
	return colours[random];
}

function generateRandomColours(num){
// make array
var arr = []
//add num random colours to array
for(var i = 0; i < num; i++){
	//get random colour

arr.push(randomColour())
	function randomColour(){
		//pick a red from 0-255
		var r = Math.floor(Math.random() * 256)
		//pick a green from 0-255
		var g = Math.floor(Math.random() * 256)
		//pick a blue from 0-255
		var b = Math.floor(Math.random() * 256)
		 return "rgb(" + r + "," + " " + g + "," + " " + b + ")"
	}
	//push into array
}
//return array
return arr;
}