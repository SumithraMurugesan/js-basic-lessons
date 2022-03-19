
function checkForm() {
    var formFname = document.myForm.fname;
    var formLname = document.myForm.lname;
    var formEmail = document.myForm.email;
    var formPassword = document.myForm.password;
    if (formFname.value.indexOf(" ") == -1) {
      document.querySelector(".error-msg-f").style.display = 'block';
        formFname.focus();
        return;
    }
    else{
      return true;
      form.focus();
  
    }
    if (formLname.value.indexOf(" ") == -1) {
      document.querySelector(".error-msg-l").style.display = 'block';
  
        form.focus();
        return;
    }
    if (formEmail.value.indexOf("@") == -1 || 
    formEmail.value.indexOf(".") == -1) {
      document.querySelector(".error-msg-e").style.display = 'block';
  
        formEmail.focus();
        return;
    }
  
    if (formPassword.value.indexOf(" ") == -1) {
      document.querySelector(".error-msg-p").style.display = 'block';
  
      
        formPassword.focus();
        return;
    }
  }