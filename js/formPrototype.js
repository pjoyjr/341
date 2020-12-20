$(document).ready(function(){	
	$( "#accordion" ).accordion();
	
	var availableTags = [
		"Retrievers (Labrador)",
		"German Shepherd Dogs",
		"Retrievers (Golden)",
		"French Bulldogs",
		"Bulldogs",
		"Beagles",
		"Poodles",
		"Rottweilers",
		"Pointers (German Shorthaired)",
		"Yorkshire Terriers",
		"Boxers",
		"Dachshunds",
		"Pembroke Welsh Corgis",
		"Siberian Huskies",
		"Australian Shepherds",
		"Great Danes",
		"Doberman Pinschers",
		"Cavalier King Charles Spaniels",
		"Miniature Schnauzers",
		"Shih Tzu",
		"Boston Terriers",
		"Bernese Mountain Dogs",
		"Pomeranians",
		"Havanese",
		"Shetland Sheepdogs",
		"Brittanys",
		"Spaniels (English Springer)",
		"Pugs",
		"Mastiffs",
		"Spaniels (Cocker)"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});
	
	$( "#tabs" ).tabs();
	
	$("#signup").click(signUp);
	$("#signUpSitter").click(signUpSitter);
	
	function signUp(){
		$('#outputData1').append("<br>Ahoy jQuery World!");
	}
	
	function signUpSitter(){
		$('#outputData2').append('<br>Ahoy Jquery World!');
	}
});