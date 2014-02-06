function validate_Form(){

	var x = document.forms["registration_form"]["firstname"].value();
	if (x==null||x=="")
	{
		document.getElementById("error_message").innerHTML = "Enter First Name"
	}

// no empty fields

// valid emails

// valid phone numbers

// valid grad year


	
}

//