function errorMessage() {
  var error = document.getElementById("error")
  var pass = document.getElementById("pass").value;
  var mail = document.getElementById("mail").value;
  if(mail=="")
  {
    display("Please enter the mail");
  }
  else if(pass=="")
  {
    display("Please enter the password");
  }
  else {
    error.textContent="Successfully Logged in"
    error.style.border = "thick solid green";
    error.style.backgroundColor = "green";
  }
  
}
function errorMsg()
{
  var error = document.getElementById("error")
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var cpass = document.getElementById("cpass").value;
  var mail = document.getElementById("mail").value;
  var dob = document.getElementById("dob").value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(name=="")
  {
    display("Please enter the name");
  }
  else if(mail=="")
  {
    display("Please enter the mail");
  }
  else if(pass=="")
  {
    display("Please enter the password");
  }
  else if(cpass=="")
  {
    display("Please enter the confirm password");
  }
  else if(!mail.match(mailformat))
  {
    display("Email is invalid");
  }
  else if(pass!==cpass)
  {
    display("Password and confirm password must be same")
  }
  else {
    error.textContent="Successfully signed up";
    error.style.border = "thick solid green";
    error.style.backgroundColor = "green";
  }
}
function display(text)
{
    var error = document.getElementById("error")
    error.textContent = text;
    error.style.color = "white"
    error.style.border = "thick solid red";
    error.style.backgroundColor = "red";
}
