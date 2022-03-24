function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    alert("notify Successfully");
document.form1.text1.focus();
return true;
}
else
{
document.getElementById("error-msg").innerHTML="please provide a valid email address";
document.form1.text1.focus();
return false;
}
}