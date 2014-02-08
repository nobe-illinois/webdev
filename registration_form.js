function validateForm()
{
	var message = "";

	var firstname = document.forms["registration_form"]["firstname"].value;
	if (firstname == null || firstname == "")
		message += "Enter Your First Name";
		
		
	var lastname = document.forms["registration_form"]["lastname"].value;
	if (lastname == null || lastname == "") 
	{
		if (message != "")
			message += "\n";
		message += "Enter Your Last Name";
		
	}
		
	var personal_email = document.forms["registration_form"]["personal_email"].value;
	var work_email = document.forms["registration_form"]["work_email"].value;
	var atpos_personal = personal_email.indexOf('@');
	var dotpos_personal = personal_email.lastIndexOf('.');
	var atpos_work = work_email.indexOf('@');
	var dotpos_work = work_email.lastIndexOf('.');
	if ( (personal_email == null || personal_email =="") && (work_email == null || work_email == "") )
	{
		if (message != "" )
			message += "\n";
		message += "Enter an Email Address";
	} else {
		if ( personal_email != null && personal_email != "" ) 
		{
			if ( atpos_personal < 1 
				 || dotpos_personal < atpos_personal +2 
				 || dotpos_personal + 2 >= personal_emal.length )
			{
				if (message != "" )
					message += "\n";
				message += "Enter an Valid Personal Email";
			}
		}
		if ( work_email != null && work_email != "") 
		{
			if ( atpos_work < 1 
				 || dotpos_work < atpos_work + 2
				 || dotpos_work + 2 >= work_email.length )
			{
				if (message != "" )
					message += "\n";
				message += "Enter a Valid Work Email";
			}
		}
	
	}
		
	if ( message != "" ) {
		alert(message);
		return false;
	}
}
