/*
    Filename: pickMe.js
    Written by: Paul Joy
    Purpose: Alter pickMe.html with several buttons
    Date: 11/01/2019
    Modification History: None
    Last Modified: N/A
*/
$(document).ready(function(){
	$("#btn1").click(btn1);
	$("#btn2").click(btn2);
	$("#btn3").click(btn3);
	$("#btn4").click(btn4);
	$("#btn5").click(btn5);
	$("#btn6").click(btn6);
	$("#btn7").click(btn7);
	
	//Button1 will demonstrate a jQuery selection by tag name
	function btn1(){
		$("p").css("color","purple");
	}
	//Button2 will demonstrate a jQuery selection by class
	function btn2(){
		$(".alive").css("color","green");
	}
	//Button3 will demonstrate a jQuery selection by id
	function btn3(){
		$("#Jake").css("font-weight", "800");
	}
	
	
	//Button4 will apply multiple instructions to a jQuery selection in a single line of code.
	function btn4(){
		$(".dead").fadeOut("slow").css().css("color", "black").fadeIn("slow");
	}
	//Button5 will demonstrate a filtered jQuery selection by tag name
	function btn5(){
		$("li").css("border", "3px solid black");
	}
	//Button6 will demonstrate a filtered jQuery selection by class
	function btn6(){
		$(".alive:even").css("border", "2px solid yellow");
		$(".alive:odd").css("border", "2px solid pink");
	}
	//Button7 will demonstrate a filtered jQuery selection by id
	function btn7(){
		$("#Ryan:first").css("background-color", "orange" )
	}

});
