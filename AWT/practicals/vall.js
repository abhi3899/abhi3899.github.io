function formValidation()
{	
	var sname = document.form1.sname;
	var seid = document.form1.seid;
	var sphn = document.form1.sphn;
	var sM = document.getElementById("M").checked;
	var sF = document.getElementById("F").checked;
	var sadd = document.getElementById("address");
	if(validateSname(sname))
	{
		if(Valcontact(sphn))
		{
			if(Valemail(seid))
			{
				if(Valgen(sM,sF))
				{ 
					if(Valadd(sadd))
					{
						alert("DONE");
					}
				}
			}
		}
	}
	return false;
}
function validateSname(sname)
{
	var nameLen = sname.value.length;
	if(nameLen == 0 || nameLen == "null")
	{
		alert("Enter Correct Name");
		sname.focus();
		return false;
	}
	else
	{	return true;
		
	}
}
function Valcontact(contact) 
{
	var conLen = contact.value.length;
	if(conLen <= 0 || conLen > 10)
	{
		alert("Contact length no correct!");
		cnum.focus();
		return false;
	}
	else
	{
		return true;
	}
}
function Valemail(email) 
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		eid.focus();
		return false;
	}
}
function Valgen(M,F) 
{
	if(M || F) 
	{
		return true;
	}
	else
	{
		alert('Select Male/Female');
		gender.focus();
		return false;
	}
}		
function Valadd(address) 
{
	var letters = /^[0-9a-zA-Z]+$/;
	if(address.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('User address must have alphanumeric characters only');
		address.focus();
		return false;
	}
}