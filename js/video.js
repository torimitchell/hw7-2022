// **********
// **********
// SETUP ZONE
// **********
// **********
var video = document.getElementById("player1");
video.load();

video.autoplay = false;
video.loop = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
});

// **********
// **********
// PLAY VIDEO
// **********
// **********
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});
function playvideo() {
	video.play();
}

// **********
// **********
// PAUSE VIDEO
// **********
// **********
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
});
function pausevideo() {
	video.pause();
}

// **********
// **********
// SLOW VIDEO
// **********
// **********
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
});



// **********
// **********
// SPEED VIDEO
// **********
// **********
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
});


// **********
// **********
// SKIP AHEAD IN VIDEO
// **********
// **********
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
});


// **********
// **********
// MUTE VIDEO
// **********
// **********
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute button");
});
var muteTog = document.getElementById("mute");
	if (video.muted) {
		video.muted = false; // if the video is currently muted and they hit the toggle button, unmute the video
		muteTog.innerHTML = "Mute";
	} else {
		video.muted = true;
		muteTog.innerHTML = "Unmute";
	}

// **********
// **********
// VOL SLIDER
// **********
// **********
document.querySelector("#slider").addEventListener("click", function() {
	console.log("I'm the slider");
});


// **********
// **********
// STYLED
// **********
// **********
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School button");
});
video = document.querySelector("figure");
video.classList.add("oldSchool");

// **********
// **********
// ORIGINAL
// **********
// **********
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original button");
});
video = document.querySelector("figure");
video.classList.remove("oldSchool");

