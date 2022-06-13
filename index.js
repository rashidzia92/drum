
// detcting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	// body...
	var buttonInnerHtml = this.innerHTML;
	makeSound(buttonInnerHtml);
	buttonAnimation(buttonInnerHtml);
});

}

// decting keyboard press
	
	document.addEventListener("keypress", function(event){

		makeSound(event.key);
		buttonAnimation(event.key);
	});
	function makeSound (key){
		switch (key) {
		case "w":
		// statements_1
		var tom1 = new Audio("sounds/tom-1.mp3");
		tom1.play();
			
		break;
		case "a":
		// statements_2
		var tom2 = new Audio("sounds/tom-2.mp3");
		tom2.play();
			
		break;
		case "s":
		// statements_3
		var tom3 = new Audio("sounds/tom-3.mp3");
		tom3.play();
			
		break;
		case "d":
		// statements_4
		var tom4 = new Audio("sounds/tom-4.mp3");
		tom4.play();
			
		break;
		case "j":
			// statements_5
		var snare = new Audio("sounds/snare.mp3");
		snare.play();
			
		break;
		case "k":
		// statements_6
		var kick = new Audio("sounds/kick-bass.mp3");
		kick.play();
			
		break;
		case "l":
		// statements_7
		var crash = new Audio("sounds/crash.mp3");
		crash.play();
			
		break;
		default:
			// statements_def
			console.log(buttonInnerHtml);
			break;
	}
	}
	function buttonAnimation(currentKey){
		var activeButton = document.querySelector("." + currentKey);
		activeButton.classList.add("pressed");

		setTimeout(function(){
			activeButton.classList.remove("pressed");
		}, 300);

	}
