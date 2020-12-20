/*
    Filename: triggered.js
    Written by: Paul Joy
    Purpose: Alter triggered.html with Event Methods 
    Date: 11/15/2019
    Modification History: None
    Last Modified: N/A
	
*/
var resized = 0;
var imgSrc = 0;

$(document).ready(function(){
	//Reset Page
	$("#reset").click(resetWin);
	function resetWin(){
		window.location.href = "https://cs.iupui.edu/~pjoyjr/n341/triggered.html";
	}
	
	//for resizing window
	$(window).resize(function(){
		if(resized == 0){
			$("#display").append('<img src="../images/disney.png" id="walt" alt="na1">');
			resized = 1;
		}
	});
	
	//hover over images
	$("#temple").hover(hoverFcn);
	function hoverFcn(){
		if(imgSrc == 0){
			$("#temple").attr("src", "../images/epstein.jpg");
			$("#temple").attr("style", "max-height: 410px; max-width: 618px;");
		}
		if(imgSrc == 1){
			$("#temple").attr("src", "../images/temple.jpg");
			$("#temple").attr("style", "max-height: 410px; max-width: 618px;");
		}
		imgSrc = (imgSrc + 1) % 2;
	}
	
	//Keypress function
	$("input").keypress(function(){
		window.open('https://www.magicalkingdoms.com/cruise/ports/stthomasexcur.html');
	});

	
});

