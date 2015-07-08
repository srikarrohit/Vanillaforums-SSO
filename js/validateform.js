function validateForm(){
//alert(1);
var email = document.forms["loginform"]["email"].value;
var pass = document.forms["loginform"]["password"].value;
var e_error=pass1_error="";
var count=0;
if(email === "")
{
	//alert(2);
	count++;
	e_error="Email cannot be empty";
	document.getElementById('e_error').innerHTML = e_error;
}
else
{
	e_error="";
	document.getElementById('e_error').innerHTML = e_error;
}
if(pass === "")
{
	//alert(3);
	count++;
	pass_error="Password cannot be empty";
	document.getElementById('pass1_error').innerHTML = pass1_error;
}
else if( pass.match(/[\.0-9a-zA-Z\s]+/gi) != pass )
{
	count++;
	pass_error="Only letters,numbers,spaces and dots are allowed";
	document.getElementById('pass1_error').innerHTML = pass1_error;
}
else if( pass.length<8 )
{
	count++;
	pass_error="Password should be of minimum 8 characters";
	document.getElementById('pass1_error').innerHTML = pass1_error;
}
else
{
	pass_error="";
	document.getElementById('pass1_error').innerHTML = pass1_error;
}
if(count!=0)
{
	return false;
}
else
{
	return true;
}
}
function valnewlogin()
{
//alert(1);
var name = document.forms["newlogin"]["userid"].value;
var email = document.forms["newlogin"]["Emailid"].value;
var pass = document.forms["newlogin"]["password"].value;
var re_pass = document.forms["newlogin"]["repassword"].value;  
var name_error=email_error=pass_error=re_pass_error="";
var count=0;
if(name === "")
{
	//alert(2);
	count++;
	name_error="Name cannot be empty";
	document.getElementById('name_error').innerHTML = name_error;
}
else if( name.match(/[\.0-9a-zA-Z\s]+/gi) != name )
{
	count++;
	name_error="Only letters,numbers,spaces and dots are allowed";
	document.getElementById('name_error').innerHTML = name_error;
}
else
{
	name_error="";
	document.getElementById('name_error').innerHTML = name_error;
}

if(email === "")
{
	//alert(3);
	count++;
	email_error="Email id cannot be empty";
	document.getElementById('email_error').innerHTML = email_error;
}
else if( email.match(/[\.0-9a-zA-Z]{1,30}@[a-zA-Z0-9]+\.[a-zA-Z]+/gi) != email )
{
	count++;
	email_error="Email id is invalid";
	document.getElementById('email_error').innerHTML = email_error;
	console.log(email.match(/[\.0-9a-zA-Z]{6,30}@[a-zA-Z0-9]+\.[a-zA-Z]+/gi));
}
else
{
	email_error="";
	document.getElementById('email_error').innerHTML = email_error;
}
if(pass === "")
{
	//alert(4);
	count++;
	pass_error="Password cannot be empty";
	document.getElementById('pass_error').innerHTML = pass_error;
}
else if( pass.match(/[\.0-9a-zA-Z\s]+/gi) != pass )
{
	count++;
	pass_error="Only letters,numbers,spaces and dots are allowed";
	document.getElementById('pass_error').innerHTML = pass_error;
}
else if( pass.length!=8 )
{
	count++;
	pass_error="Password is of 8 characters in length";
	document.getElementById('pass_error').innerHTML = pass_error;
}
else
{
	pass_error="";
	document.getElementById('pass_error').innerHTML = pass_error;
}
if(re_pass === "")
{
	//alert(5);
	count++;
	re_pass_error="Password cannot be empty";
	document.getElementById('re_pass_error').innerHTML = re_pass_error;
}
else if( re_pass.match(/[\.0-9a-zA-Z\s]+/gi) != pass )
{
	count++;
	re_pass_error="Only letters,numbers,spaces and dots are allowed";
	document.getElementById('re_pass_error').innerHTML = re_pass_error;
}
else if( re_pass.length!=8 )
{
	count++;
	re_pass_error="Password is of 8 characters in length";
	document.getElementById('re_pass_error').innerHTML = re_pass_error;
}
else if( re_pass.localeCompare(pass))
{
	count++;
	re_pass_error="Password Should Be same";
	document.getElementById('re_pass_error').innerHTML = re_pass_error;
}

else
{
	re_pass_error="";
	document.getElementById('re_pass_error').innerHTML = re_pass_error;
}
if(count!=0)
{
	return false;
}
else
{
	return true;
}
}