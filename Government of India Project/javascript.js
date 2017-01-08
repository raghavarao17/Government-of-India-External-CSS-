function llvalidate()
{
var firstname1 = document.getElementById("fn");
var middlename1 = document.getElementById("mn");
var lastname1 = document.getElementById("ln");
var email1 = document.getElementById("email");
var cemail1 = document.getElementById("ce");
var pass1 = document.getElementById("pwd");
var wp1 = document.getElementById(wp);
var cy1 = document.getElementById("cy");
var zn1 = document.getElementById("zn");


firstname11 = /^([a-zA-Z0-9 _-]+)$/;
lastname11 = /^([a-zA-Z0-9 _-]+)$/;
email11 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
pass11 = /^([a-zA-Z0-9 _-]+)$/
wp11 = /^[0-9]$/;
cy11 = /^[a-zA-Z\s]+$/;
zn11 = /^[0-9]$/;

if(firstname1!=="" && lastname1!=="" && email1!=="" && cemail1!=="" && pass1!=="" && wp!=="" && cy1!=="" && zn1!=="" )
{
	alert("success");
	return true;
}

else
{
	alert("all fields are required");
	return false;
}







}