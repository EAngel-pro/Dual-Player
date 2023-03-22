//initializing youtube iframe api
var tag = document.createElement('script');
var ytVidOne = 'Pgw_ZDQnpfs';
var ytVidTwo = 'Pgw_ZDQnpfs';
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
	//initializing youtube player 1
	myvid = new YT.Player('myvid', {
		height: '480',
		width: '640',
		videoId: ytVidOne
	});
	//initializing youtube player 2
	myvid3 = new YT.Player('myvid3', {
		height: '480',
		width: '640',
		videoId: ytVidTwo
	});
}
//player toggle variables
var boxOne = true;
var boxTwo = true;
var boxThree = true;
var boxFour = true;
//initialize html players
var htmlSrcOne = "1 Minute Timer.mp4";
var htmlSrcTwo = "1 Minute Timer.mp4";
document.getElementById("myvid2").setAttribute("src",htmlSrcOne);
document.getElementById("myvid4").setAttribute("src",htmlSrcTwo);
//ppbutton.innerHTML
var playPauseBox = true;
//youtube player 1 toggle button
document.getElementById("btn1").addEventListener("click", function()
{
	var box1=document.getElementById("myvid")
	if(box1.style.display=="none")
	{
		box1.style.display="inline";
		btn1.style.backgroundColor="green";
		btn1.innerHTML = "YouTube Player 1: ON";
		boxOne = true;
	}
	else
	{
		box1.style.display="none";
		btn1.style.backgroundColor="red";
		btn1.innerHTML = "YouTube Player 1: OFF";
		myvid.pauseVideo();
		boxOne = false;
	}
})
//HTML player 1 toggle button
document.getElementById("btn2").addEventListener("click", function()
{
	var box2=document.getElementById("myvid2")
	if(box2.style.display=="none")
	{
		box2.style.display="inline";
		btn2.style.backgroundColor="green";
		btn2.innerHTML = "HTML Player 1: ON";
		boxTwo = true;
	}
	else
	{
		box2.style.display="none";
		btn2.style.backgroundColor="red";
		btn2.innerHTML = "HTML Player 1: OFF";
		myVideo2.pause();
		boxTwo = false;
	}
})
//youtube player 2 toggle button
document.getElementById("btn3").addEventListener("click", function()
{
	var box3=document.getElementById("myvid3")
	if(box3.style.display=="none")
	{
		box3.style.display="inline";
		btn3.style.backgroundColor="green";
		btn3.innerHTML = "YouTube Player 2: ON";
		boxThree = true;
	}
	else
	{
		box3.style.display="none";
		btn3.style.backgroundColor="red";
		btn3.innerHTML = "YouTube Player 2: OFF";
		myvid3.pauseVideo();
		boxThree = false;
	}
})
//HTML player 2 toggle button
document.getElementById("btn4").addEventListener("click", function()
{
	var box4=document.getElementById("myvid4")
	if(box4.style.display=="none")
	{
		box4.style.display="inline";
		btn4.style.backgroundColor="green";
		btn4.innerHTML = "HTML Player 2: ON";
		boxFour = true;
	}
	else
	{
		box4.style.display="none";
		btn4.style.backgroundColor="red";
		btn4.innerHTML = "HTML Player 2: OFF";
		myVideo4.pause();
		boxFour = false;
	}
})
//play/pause button
var ppbutton = document.getElementById("vidbutton");
ppbutton.addEventListener("click", playPause);
myVideo2 = document.getElementById("myvid2");
myVideo4 = document.getElementById("myvid4");
function playPause() {
	if(playPauseBox == true) {
		if(boxOne == true) {
			myvid.playVideo();
		}
		if(boxTwo == true) {
			myVideo2.play();
		}
		if(boxThree == true) {
			myvid3.playVideo();
		}
		if(boxFour == true) {
			myVideo4.play();
		}
		playPauseBox = false;
		ppbutton.innerHTML = "Pause";
	}
	else {
		if(boxOne == true) {
			myvid.pauseVideo();
		}
		if(boxTwo == true) {
			myVideo2.pause();
		}
		if(boxThree == true) {
			myvid3.pauseVideo();
		}
		if(boxFour == true) {
			myVideo4.pause();
		}
		playPauseBox = true;
		ppbutton.innerHTML = "Play";
	}
}
//restart button
var resbutton = document.getElementById("restartbutton");
resbutton.addEventListener("click", restartVids);
function restartVids() {
	if(boxOne == true) {
		myvid.seekTo(0);
	}
	if(boxTwo == true) {
		myVideo2.currentTime = 0;
	}
	if(boxThree == true) {
		myvid3.seekTo(0);
	}
	if(boxFour == true) {
		myVideo4.currentTime = 0;
	}
}
//GetID function
function YouTubeGetID(url){
	var ID = '';
	url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
	if(url[2] !== undefined) {
		ID = url[2].split(/[^0-9a-z_\-]/i);
		ID = ID[0];
	}
	else {
		ID = url;
	}
		return ID;
}

//YouTube Player 1 URL Prompt
var yturlbuttonone = document.getElementById("yturlone");
yturlbuttonone.addEventListener("click", ytPromptOne);
function ytPromptOne() {
	if (boxOne == false) {
		alert("YouTube Player 1 disabled!");
	} else {
		let url = prompt("Enter URL", "https://youtube.com/watch?v=" + ytVidOne);
		if (url == null || url == "") {
			alert("Cancelled!");
		} else {
			ytVidOne = YouTubeGetID(url);
			myvid.loadVideoById(ytVidOne);
		}
	}
}


//HTML Player 1 URL Prompt
var htmlurlbuttonone = document.getElementById("htmlswapone");
htmlurlbuttonone.addEventListener("click", htmlPromptOne);
function htmlPromptOne() {
	if (boxTwo == false) {
		alert("HTML Player 1 disabled!");
	} else {
		let url = prompt("Enter URL or File Path", htmlSrcOne);
		if (url == null || url == "") {
			alert("Cancelled!");
		} else {
			if (url[0] == '\"') {
				let pathFixer = url;
				url = pathFixer.replace(/"/g, '');
			}
			htmlSrcOne = url;
			document.getElementById("myvid2").setAttribute("src",htmlSrcOne);
		}
	}
}

//YouTube Player 2 URL Prompt
var yturlbuttontwo = document.getElementById("yturltwo");
yturlbuttontwo.addEventListener("click", ytPromptTwo);
function ytPromptTwo() {
	if (boxThree == false) {
		alert("YouTube Player 2 disabled!");
	} else {
		let url = prompt("Enter URL", "https://youtube.com/watch?v=" + ytVidTwo);
		if (url == null || url == "") {
			alert("Cancelled!");
		} else {
			ytVidTwo = YouTubeGetID(url);
			myvid3.loadVideoById(ytVidTwo);
		}
	}
}


//HTML Player 2 URL Prompt
var htmlurlbuttontwo = document.getElementById("htmlswaptwo");
htmlurlbuttontwo.addEventListener("click", htmlPromptTwo);
function htmlPromptTwo() {
	if (boxFour == false) {
		alert("HTML Player 2 disabled!");
	} else {
		let url = prompt("Enter URL or File Path", htmlSrcTwo);
		if (url == null || url == "") {
			alert("Cancelled!");
		} else {
			if (url[0] == '\"') {
				let pathFixer = url;
				url = pathFixer.replace(/"/g, '');
			}
			htmlSrcTwo = url;
			document.getElementById("myvid4").setAttribute("src",htmlSrcTwo);
		}
	}
}