/**************************************
 TITLE: functions.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: September 18, 2019
 PURPOSE: -practice using functions with parameters
 LAST MODIFIED ON: September 18, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	/*********************
	Purpose: -The function should concatenate the first string, the number, and the second 
			  string into a combined string of original text and add that text to the page.
             -The function should output to the page using textContent - not alert! 
	Parameters: divID - the <div id> for output
				number - some number
				string1 -  string to be added before the number
				string2 -  string to be added after the number
	Return: n/a
	*********************/
	function concatString(divID, number, string1, string2){
		var strMessage = string1 + " " + number + " " + string2;
		var elOutput = document.getElementById(divID);
		elOutput.textContent = strMessage;
	}
	
	concatString('text1', 6, 'Take a hard right in', 'metres to avoid that rock!');
	concatString('text2', 7, 'Watch out for that Giant Octopus in', 'metres!');
	concatString('text3', 2, 'Just over ye wave and ', ' miles straight ahead to home!');
	concatString('text4', 9, 'Now take a left at', 'metres to hit the port!');
	concatString('text5', 5, 'I aughta give ye a', 'star review!');
	
	
}); // end of $(document).ready()




/***
	Call the function at least five times.
***/