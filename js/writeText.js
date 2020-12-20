/**************************************
 TITLE: writeText.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: September 11, 2019
 PURPOSE: To write to a page using textContent, innerHTML
 LAST MODIFIED ON: September 11, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	//write to text1 using textContent
	var strMessage = "You asked for me major? Me major is Computer Science.";
	var elOutput = document.getElementById("text1");
	elOutput.textContent = strMessage;
	
	//write to text2 using innerHTML
	var strMessage2 = "<b>I bet ye didnt know me was in KoRns Music Video.</b>";
	var elOutput2 = document.getElementById("text2");
	elOutput2.innerHTML = strMessage2;
	
}); // end of $(document).ready()