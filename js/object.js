/**************************************
 TITLE: object.js
 AUTHOR: Paul William Joy, Jr. (PWJ)
 CREATE DATE: September 25, 2019
 PURPOSE: JavaScript file that creates pirate object with variablesand functions using a random number generator
 LAST MODIFIED ON: September 25, 2019
 LAST MODIFIED BY: Paul William Joy, Jr. (PWJ)
 MODIFICATION HISTORY:
***************************************/

$(document).ready(function(){
	function Pirate(strRank, favNum, htmlTag) {
		//properties
		this.strRank = strRank;
		this.favNum = favNum;
		this.htmlTag = htmlTag;
		
		/****
		Description: sets pirate favNum to a random number between 1-10
		Parameters: n/a
		Return: n/a
		****/
		this.rng = function(){
			this.favNum = Math.floor(10 * Math.random()) + 1;
		};
		
		/****
		Description: prints the output given a parameter for each pirate
		Parameters: what the pirate says
		Return: n/a
		****/
		this.speak = function(speech, htmlTag){
			if(this.strRank != 'Captain'){ 
				var strOutput = ": me guess is " + this.favNum.toString() + ", matey";
				var elOutput = document.getElementById(htmlTag);
				elOutput.textContent = strRank + strOutput;
			}
			if(this.strRank == 'Captain'){
				var elOutput = document.getElementById(htmlTag);
				elOutput.textContent = 'Captain Here, ' + speech;
			}
		};
	}
	
	//create pirates and crew
	var captain = new Pirate('Captain', 7, 'text1');
	var mate1 = new Pirate('Floor Supervisor', 4, 'text2');
	var mate2 = new Pirate('Mop Crew', 2, 'text3');
	var mate3 = new Pirate('Lookout man', 1, 'text4');
	
	//play guessing game
	captain.speak('Yall guess any # 1-10 and if yall get it yall gets me bottle o\' grog', 'text1');
	captain.rng();
	mate1.rng();
	mate2.rng();
	mate3.rng();
	mate1.speak('', 'text2');
	mate2.speak('', 'text3');
	mate3.speak('', 'text4');
	
	var strCapTalk = 'Me magic number was ' + captain.favNum;
	captain.speak(strCapTalk, 'text5');
	
	var correct = 0;
	if(captain.favNum == mate1.favNum){
		var strMate1 = mate1.strRank + ' guessed correctly';
		captain.speak(strMate1, 'text6');
		correct = 1;
	}
	
	if(captain.favNum == mate2.favNum){
		var strMate2 = mate2.strRank + ' guessed correctly';
		captain.speak(strMate2, 'text7');
		correct = 1;
	}
	
	if(captain.favNum == mate3.favNum){
		var strMate3 = mate3.strRank + ' guessed correctly';
		captain.speak(strMate3, 'text8');
		correct = 1;
	}
	
	if(correct == 0)
	{
		var str1 = 'I need new ship mates, the bottle is mine!';
		captain.speak(str1, 'text9');
	}
	
	
	
	
}); // end of $(document).ready()