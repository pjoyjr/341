/**************************************
 TITLE: convoPrompt.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: September 13, 2019
 PURPOSE: JavaScript file that prompts the user for their name, # of doubloons and printed our to page
 LAST MODIFIED ON: September 13, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	var strName = "";
	var strQuestion = "Whats ye name matey?";
	var strDefault = "Captain Davey Jones";
	strName = prompt(strQuestion, strDefault);
	
	var strGold = "";
	var strQuestion2 = "How many Gold Doubloons ye got?";
	var strDefault2 = "4";
	strGold = prompt(strQuestion2, strDefault2);
	
	var intGold = parseInt(strGold);
	const price = 287;
	var intProfit = price * intGold;
	var strProfit = intProfit.toString();
	
	var strOutput = "Hey, " + strName + " has found " + strGold + " Gold doubloons for a profit of $" + strProfit;
	
	
	var elOutput = document.getElementById("text1");
	elOutput.textContent = strOutput;
}); // end of $(document).ready()

/**
Output concatenated string including user's pirate name, the number of gold doubloons, and total profit in USD using textContent. For example, "I, Peg Leg O'Brien, have plundered 17 gold doubloons for a total profit of $4879. Argh!
After validating all files, be sure to upload it to the server.
Follow all procedures listed below. 
**/