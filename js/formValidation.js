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
	$( "#datepicker" ).datepicker({
		inline: true
	});
	$( "#spinner" ).spinner();
	$("input[type='submit']").button();
	$("input[type='reset']").button();

	$("#form1").validate({
		rules: {
			email:{
				required: true,
				email: true
			}
		},
		messages: {
			
		},
		submitHandler: function() {
			var strGender = $('input[name="gender"]:checked').val();
			var strFName = $('#firstName').val();
			var strLName = $('#lastName').val();
			var strHomeAddress = $('#homeAddress').val();
			var strPhone = $('#phone').val();
			var strEmailAddress = $('#emailAddress').val();
			var strPassword = $('#password').val();
			var strBreed = $('#autocomplete').val();
			var strDate = $('#datepicker').val();
			var strDogSize = $('#dogSize').val();	
			var strInterests ="";
			$('input[name="interests"]:checked').each(function() {
				strInterests += $(this).val() + " ";
			});
		
			$('#outputData1').append("<br><br><br>Gender: " + strGender + "<br>")	
							 .append("Name: " + strFName + " " + strLName + "<br>")
							 .append("Home Address: " + strHomeAddress + "<br>")
							 .append("Phone: " + strPhone + "<br>")
							 .append("Email: " + strEmailAddress + "<br>")
							 .append("Password: " + strPassword + "<br>")
							 .append("Breed: " + strBreed + "<br>")
							 .append("Date Wanted: " + strDate + "<br>")
							 .append("Dog Size: " + strDogSize + "<br>")
							 .append("Interests: " + strInterests + "<br>")
		}
	});
	
	$("#form2").validate({
		rules: {
			email2:{
				required: true,
				email: true
			}
		},
		messages: {
		},
		submitHandler: function() {
		var strDogAmount = $('#spinner').val();	
		var strGender2 = $('input[name="gender2"]:checked').val();
		var strFName2 = $('#firstName2').val();
		var strLName2 = $('#lastName2').val();
		var strHomeAddress2 = $('#homeAddress2').val();
		var strPhone2 = $('#phone2').val();
		var strEmailAddress2 = $('#emailAddress2').val();
		var strPassword2 = $('#password2').val();		
		
		$('#outputData2').append("<br><br><br>Dog Amount: " + strDogAmount + "<br>")	
						 .append("Gender: " + strGender2 + "<br>")	
						 .append("Name: " + strFName2 + " " + strLName2 + "<br>")
						 .append("Home Address: " + strHomeAddress2 + "<br>")
						 .append("Phone: " + strPhone2 + "<br>")
						 .append("Email: " + strEmailAddress2 + "<br>")
						 .append("Password: " + strPassword2 + "<br>")
		}
	});
});
