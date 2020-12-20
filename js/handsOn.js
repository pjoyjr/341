/*
    Filename: handsOn.js
    Written by: Paul Joy
    Purpose: Alter handsOn.html with several buttons 
    Date: 11/9/2019
    Modification History: None
    Last Modified: N/A
	
	--Tested in both Desktop Chrome and Mobile Safari--
	--only noticable different was the curved buttons in safari and the rectangular
	  button on Desktop Chrome--
*/
$(document).ready(function(){
	
	//Demonstrate .hide()
	$("#hideBtn").click(btn1);
	function btn1(){
		$("#boat").hide();
	}
	
	//Demonstrate .show()
	$("#showBtn").click(btn2);
	function btn2(){
		$("#boat").show();
	}	
	
	//Demonstrate .toggle()
	$("#togBtn").click(btn3);
	function btn3(){
		$("#boat").toggle();
	}
	
	//Demonstrate .slideUp()
	$("#upBtn").click(btn4);
	function btn4(){
		$("#boat").slideUp();
	}
	
	//Demonstrate .slideDown()
	$("#downBtn").click(btn5);
	function btn5(){
		$("#boat").slideDown();
	}
	
	//Demonstrate .fadeIn()
	$("#inBtn").click(btn6);
	function btn6(){
		$("#boat").fadeIn(7000, function() {
			$("#msg1").css("color","purple").text("");
		});			
	}
	
	//Demonstrate .fadeOut()
	$("#outBtn").click(btn7);
	function btn7(){
		$("#boat").fadeOut("fast", function() {
			$("#msg1").css("color","purple").text( "Me boat is gone!");
		});	
	}
});
