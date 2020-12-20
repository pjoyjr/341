/**************************************
* TITLE: Loops
* AUTHOR: Christian Dodds
* CREATE DATE: 9/29/2014
* PURPOSE: base code for the Arrays and Loopiness assignment, 
*	you are encouraged to use the following code to start 
*	your arrays and loopiness assignment
* LAST MODIFIED ON: 10/9/2019
* LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
* MODIFICATION HISTORY:
* 
**************************************/

$(document).ready(function(){
	var strCode;		
	do{
		strCode = prompt("Hoist the secret message ye scurvy dawgs! (1 character)");
	}while(strCode.length != 1);
	
	var intCode = parseAscii(strCode);
	var binCode = parseBin(intCode);
	var arrayCode = binCode.split("");
	
	var boolOutput;
	var i;
	for(i = 0; i < arrayCode.length; i++){
		if(arrayCode[i] == 1){
			arrayCode[i] = 'True';
		}
		if(arrayCode[i] == 0){
			arrayCode[i] = 'False ';
		}
	}
	
	
	var elOutput = document.getElementById("text1");
	elOutput.textContent = arrayCode;

	/*****			
	Purpose: *** given a single character, return its ascii value***			
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: *** Given an integer, return its binary value in base 2 ***			
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}	
		}
		return strBin;
	}
});