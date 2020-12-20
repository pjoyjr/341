/**************************************
 TITLE: switches.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: October 1, 2019
 PURPOSE: Demonstrate the use of switch statements and parsing input
 LAST MODIFIED ON: October 1, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	//Prompt user for their current latitude and longitude, and their destination latitude and longitude
	var strCurrLat = prompt("What is your current latitude?");
	var strCurrLong = prompt("What is your current longitude?");
	var strDestLat = prompt("What is your destination latitude?");
	var strDestLong = prompt("What is your destination longitude?");
	
	var intCurrLat = parseInt(strCurrLat)
	var intCurrLong = parseInt(strCurrLong)
	var intDestLat = parseInt(strDestLat)
	var intDestLong = parseInt(strDestLong)
	
	var strCurrLoc = "Current Location: Latitude: " + strCurrLat + " Longitude: " + strCurrLong;
	var strDestLoc = "Destination Location: Latitude: " + strDestLat + " Longitude: " + strDestLong;
	var elOutput1 = document.getElementById("echo");
	var strEcho = strCurrLoc + "<br>" + strDestLoc;
	elOutput1.innerHTML = strEcho;
	
	//Use nested if/else statements to process answers to determine heading (north east, north west, south east, south west, or Land Ho!)
	var strIfElse;
	if(intCurrLat <= intDestLat && intCurrLong <= intDestLong)
	{
		strIfElse = "Head North East";
	}else if(intCurrLat <= intDestLat && intCurrLong >= intDestLong)
	{
		strIfElse = "Head North West"
	}else if(intCurrLat >= intDestLat && intCurrLong >= intDestLong)
	{
		strIfElse = "Head South West"
	}else if(intCurrLat >= intDestLat && intCurrLong <= intDestLong)
	{
		strIfElse = "Head South East"
	}else
	{		
		strIfElse = "Land Ho!"
	}
	
	var elOutput2 = document.getElementById("ifElse");
	elOutput2.innerHTML = strIfElse;
	
	
	//Repeat the process with Case/Switch construct using the same values that the user entered the first time.
	var strSwitch;
	switch(true){
		case(intCurrLat <= intDestLat && intCurrLong <= intDestLong):
		strSwitch = "Head North East";
		break;
		
		case(intCurrLat <= intDestLat && intCurrLong >= intDestLong):
		strSwitch = "Head North West"
		break;
		
		case(intCurrLat >= intDestLat && intCurrLong >= intDestLong):
		strSwitch = "Head South West"
		break;
		
		case(intCurrLat >= intDestLat && intCurrLong <= intDestLong):
		strSwitch = "Head South East"
		break;
		
		default:
		strSwitch = "Land Ho!"
		break;
	}
	
	var elOutput3 = document.getElementById("caseSwitch");
	elOutput3.innerHTML = strSwitch;
	
}); // end of $(document).ready()
