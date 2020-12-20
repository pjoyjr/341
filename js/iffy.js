/**************************************
 TITLE: iffy.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: October 1, 2019
 PURPOSE: determine if they arrived to port on time and report response using textContent.
 LAST MODIFIED ON: October 1, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	var strYN = "";
	var strQuestion = "Did me matey make it to ye port on time?";
	var strDefault = "Yes/No";
	strYN = prompt(strQuestion, strDefault);
	
	var strMessage;
	
	if(strYN.toUpperCase() == 'YES'){
		strMessage = "Double doubloons for you mate!!";
	}
	else if(strYN.toUpperCase() == 'NO'){
		strMessage = "You swimming with the Sharks tonight matey!";
	}else{
		strMessage = "I dont understand matey";
	}
	
	var elOutput = document.getElementById("text1");
	elOutput.textContent = strMessage;
	
}); // end of $(document).ready()
