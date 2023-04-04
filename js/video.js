// **********
// **********
// SETUP ZONE
// **********
// **********
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.load();
	video.autoplay = false;
	video.loop = false;
});

// **********
// **********
// PLAY VIDEO
// **********
// **********
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// **********
// **********
// PAUSE VIDEO
// **********
// **********
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// **********
// **********
// SLOW VIDEO
// **********
// **********
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate * 0.9
	console.log("New video speed is", video.playbackRate)
});

// **********
// **********
// SPEED VIDEO
// **********
// **********
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate * 1.1
	console.log("New video speed is", video.playbackRate)
});

// **********
// **********
// SKIP AHEAD IN VIDEO
// **********
// **********
// HELP HELP HELP error
// HELP HELP HELP error
// HELP HELP HELP error
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log("Current time in video is", video.currentTime);
	if ((video.currentTime) <= (video.duration - 10)) {
		video.currentTime = video.currentTime + 10;
	} else {
		video.currentTime = 0;
	} console.log("New video timestamp is", video.currentTime);
});

// **********
// **********
// MUTE VIDEO
// **********
// **********
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute button");
	var muteTog = document.getElementById("mute");
	if (video.muted) {
		video.muted = false; // if the video is currently muted and they hit the toggle button, unmute the video
		muteTog.innerHTML = "Mute";
	} else {
		video.muted = true;
		muteTog.innerHTML = "Unmute";
	}
});

// **********
// **********
// VOL SLIDER
// **********
// **********
document.querySelector("#slider").addEventListener("change", function() {
	console.log("I'm the slider");
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

// **********
// **********
// STYLED
// **********
// **********
// HELP HELP HELP error
// HELP HELP HELP error
// HELP HELP HELP error
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School button");
	video = document.querySelector("video");
	video.classList.add("oldSchool");
});

// **********
// **********
// ORIGINAL
// **********
// **********
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original button");
	video = document.querySelector("video");
	video.classList.remove("oldSchool");
});

