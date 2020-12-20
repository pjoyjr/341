/**************************************
 TITLE: string.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: October 1, 2019
 PURPOSE: determine if they arrived to port on time and report response using textContent.
 LAST MODIFIED ON: October 10, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	var strName = "";
	var strQuestion = "What is the name of me queens significant other?";
	var strDefault = "(LONGER THAN 3 CHARACTERS PLEASE)".toLowerCase();
	
	do{
		strName = prompt(strQuestion, strDefault);
	}while(strName.length < 3);
	
	var arrayCode = new Array(12);
	arrayCode[0] = "The Mc-" + strName.charAt(0);
	arrayCode[1] = "Bought this for " + strName;
	arrayCode[2] = "The Lovely " + strName;
	arrayCode[3] = "The Famous " + strName.substring(1,strName.length);
	arrayCode[4] = "My Darling " + strName;
	arrayCode[5] = "The Sweetest " + strName;
	arrayCode[6] = "Saint " + strName.trim();
	arrayCode[7] = "My favorite " + strName;
	arrayCode[8] = strName + " Rocks" ;
	arrayCode[9] = "The Blue " + strName.replace('o','a');
	arrayCode[10] = "The Infamous " + strName.indexOf('a').toString();;
	arrayCode[11] = strName + " the Best";
	
	var strOutput = '';
	var i = 0;
	while(arrayCode[i] != undefined){
		strOutput = strOutput + arrayCode[i].toUpperCase() + "<br>";
		i++;
	}
	
	
	var elOutput = document.getElementById("text1");
	elOutput.innerHTML = 'Some possible boat names are: <br>' + strOutput;
	
}); // end of $(document).ready()



/* 
	Be sure to use indexOf()
 Use the name to create ship names for 12 different ships.
 */