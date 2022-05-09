		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		function onYouTubeIframeAPIReady() {
			myvid = new YT.Player('myvid', {
				height: '480',
				width: '640',
				videoId: 'Pgw_ZDQnpfs'
			});
			myvid3 = new YT.Player('myvid3', {
				height: '480',
				width: '640',
				videoId: 'Pgw_ZDQnpfs'
			});
		}
		var boxOne = true;
		var boxTwo = true;
		var boxThree = true;
		var boxFour = true;
		var playPauseBox = true;
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
        document.getElementById("btn2").addEventListener("click", function()
        {
          var box2=document.getElementById("myvid2")
	      if(box2.style.display=="none")
	      {
	        box2.style.display="inline";
	        btn2.style.backgroundColor="green";
			btn2.innerHTML = "File Player 1: ON";
		    boxTwo = true;
	      }
	      else
	      {
	        box2.style.display="none";
	        btn2.style.backgroundColor="red";
			btn2.innerHTML = "File Player 1: OFF";
			myVideo2.pause();
		    boxTwo = false;
	      }
        })
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
        document.getElementById("btn4").addEventListener("click", function()
        {
          var box4=document.getElementById("myvid4")
	      if(box4.style.display=="none")
	      {
	        box4.style.display="inline";
	        btn4.style.backgroundColor="green";
			btn4.innerHTML = "File Player 2: ON";
		    boxFour = true;
	      }
	      else
	      {
	        box4.style.display="none";
	        btn4.style.backgroundColor="red";
			btn4.innerHTML = "File Player 2: OFF";
			myVideo4.pause();
		    boxFour = false;
	      }
        })
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