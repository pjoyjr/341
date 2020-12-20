/**************************************
 Filename: customValidation.js
 Author: Paul Joy
 Create Date: Decemember 9, 2019
 Purpose: Provide jQuery fucntionalily along with 
 a custom validation of the form 
 Modification History:
 No Modifications
**************************************/

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

	// Use custom rules and error messages when validating
	// validate form1 on keyup and submit
	$("#form1").validate({
		rules: {
			email:{							//<input name="email">
				required: true,
				email: true
			},
			password:{							//<input name="password">
				required: true,
				minlength: 6
			},
			fName:{								//<input name="fName">
				required: true,
				minlength: 3
			},
			lName:{								//<input name="lName">
				required: true,
				minlength: 3
			},
			home:{								//<input name="home">
				required: true,
				minlength: 8
			},
			phone:{							//<input name="phone">
				required: true,
				digits: true,
				maxlength: 10
			},
			breed:{								//<input name="breed">
				required: true,
				minlength: 3
			},
			date:{							//<input name="date">
				required: true,
				date: true
			}
		},
		messages: {
			email:{							//<input name="email">
				required: "Please enter an email",
				email: $.validator.format("Must enter a valid email")
			},
			password: {							//<input name="password">
				required: "Please provide a password",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			fName: {					//<input name="fName"
				required: "Please enter your first name",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			lName: {					//<input name="lName"
				required: "Please enter your last name",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			home: {								//<input name="home">
				required: "Please enter your home address",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			phone: {							//<input name="phone">
				required: "Please enter a phone number",
				digits: "Please enter digits only",
				maxlength: $.validator.format("Must have at most {0} characters")
			},
			breed:{								//<input name="breed">
				required: "Please enter a dog breed",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			date:{							//<input name="date">
				required: "Please enter a date",
				date: $.validator.format("Must enter a valid date")
			}
		},
		submitHandler: function() {
			//scrape data from form1
			var strGender = $('input[name="gender"]:checked').val();
			var strEmailAddress = $('#emailAddress').val();
			var strPassword = $('#password').val();
			var strFName = $('#firstName').val();
			var strLName = $('#lastName').val();
			var strHomeAddress = $('#homeAddress').val();
			var strPhone = $('#phone').val();
			var strBreed = $('#autocomplete').val();
			var strDate = $('#datepicker').val();
			var strDogSize = $('#dogSize').val();	
			var strInterests ="";
			$('input[name="interests"]:checked').each(function() {
				strInterests += $(this).val() + " ";
			});
		
			//output scraped data to outputData1
			$('#outputData1').append("<br><br><br>Email: " + strEmailAddress + "<br>")
							 .append("Password: " + strPassword + "<br>")
							 .append("Gender: " + strGender + "<br>")	
							 .append("Name: " + strFName + " " + strLName + "<br>")
							 .append("Home Address: " + strHomeAddress + "<br>")
							 .append("Phone: " + strPhone + "<br>")
							 .append("Breed: " + strBreed + "<br>")
							 .append("Date Wanted: " + strDate + "<br>")
							 .append("Dog Size: " + strDogSize + "<br>")
							 .append("Interests: " + strInterests + "<br>");
		}
	});
	
	// Use custom rules and error messages when validating
	// validate form2 on keyup and submit
	$("#form2").validate({
		
		rules: {
			email2:{							//<input name="email2">
				required: true,
				email: true
			},
			password2:{							//<input name="password2">
				required: true,
				minlength: 6
			},
			fName2:{								//<input name="fName2">
				required: true,
				minlength: 3
			},
			lName2:{								//<input name="lName2">
				required: true,
				minlength: 3
			},
			home2:{								//<input name="home2">
				required: true,
				minlength: 8
			},
			phone2:{							//<input name="phone2">
				required: true,
				digits: true,
				maxlength: 10
			},
			dogsCount:{								//<input name="dogsCount">
				required: true,
				digits: true,
				minlength: 1
			}
		},
		messages: {
			email2:{							//<input name="email2">
				required: "Please enter an email",
				email: $.validator.format("Must enter a valid email")
			},
			password2: {							//<input name="password2">
				required: "Please provide a password",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			fName2: {					//<input name="fName2"
				required: "Please enter your first name",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			lName2: {					//<input name="lName2"
				required: "Please enter your last name",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			home2: {								//<input name="home2">
				required: "Please enter your home address",
				minlength: $.validator.format("Must have at least {0} characters")
			},
			phone2: {							//<input name="phone2">
				required: "Please enter a phone number",
				digits: "Please enter digits only",
				maxlength: $.validator.format("Must have at most {0} characters")
			},
			dogsCount: {							//<input name="dogsCount">
				required: "Please enter a valid number",
				digits: "Please enter digits only",
				minlength: $.validator.format("Must have at least {0} characters")
			}
		},
		submitHandler: function() {
		//scrape data from form
		var strDogAmount = $('#spinner').val();	
		var strGender2 = $('input[name="gender2"]:checked').val();
		var strFName2 = $('#firstName2').val();
		var strLName2 = $('#lastName2').val();
		var strHomeAddress2 = $('#homeAddress2').val();
		var strPhone2 = $('#phone2').val();
		var strEmailAddress2 = $('#emailAddress2').val();
		var strPassword2 = $('#password2').val();		
		
		//output scraped data to outputData2
		$('#outputData2').append("<br><br><br>Dog Amount: " + strDogAmount + "<br>")	
						 .append("Gender: " + strGender2 + "<br>")	
						 .append("Name: " + strFName2 + " " + strLName2 + "<br>")
						 .append("Home Address: " + strHomeAddress2 + "<br>")
						 .append("Phone: " + strPhone2 + "<br>")
						 .append("Email: " + strEmailAddress2 + "<br>")
						 .append("Password: " + strPassword2 + "<br>");
		}
	}); //End of $("#form2").validate
}); // End of $(document).ready