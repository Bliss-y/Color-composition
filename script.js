

function changeColor(){
	///Assigning variables for the primary colors
	var red = document.getElementById('rangeRed').value;
	var green = document.getElementById('rangeGreen').value;
	var blue = document.getElementById('rangeBlue').value;
	var color = 'RGB(' + red + ',' + green + ',' + blue +')';
	///assigning vars for secondary color
	var Cred = 255-red;
	var Cgreen = 255-green;
	var Cblue = 255-blue;
	var colorComp = 'RGB(' + Cred + ',' + Cgreen + ',' + Cblue +')';
	//getting the elements that changes color
	var primaryC = document.getElementsByClassName("primaryColor");
	var secondaryC = document.getElementsByClassName("secondaryColor");
	//looping for each element in each class and changing it's background and font color.
	var i = 0;
	for(i = 0; i < primaryC.length; i++){
		primaryC[i].style.backgroundColor = color;
		primaryC[i].style.color = colorComp;
	}
	var x;
	for(x = 0; x < secondaryC.length; x++){
		secondaryC[x].style.backgroundColor = colorComp;
		secondaryC[x].style.color = color;
	}
}
//event listener for the sliders to call changeColor()
document.getElementById('button').addEventListener('click', changeColor);
document.getElementById('rangeRed').addEventListener("input", changeColor);
document.getElementById('rangeGreen').addEventListener("input", changeColor);
document.getElementById('rangeBlue').addEventListener("input", changeColor);