function myFunction() {
    var x = document.getElementById("dispM");
    var email = document.getElementById("mail").value;
    var password = document.getElementById("pass").value;

    if (email == "" || password == "") {
        x.innerHTML="should be filled";
        return false;
    }
    else{
      if(password.length<8)
      {
        x.innerHTML="Not valid";
        return false;
      }
      else
      {
        return true;
      }
      
    }
  }
  function formValidate()
  {
    var email = document.getElementById("mail").value;

    var x = document.getElementById("dispM");
    x.hidden="true";
    if(email==="")
    {
      x.innerHTML="This field must be filled*";
      x.hidden="false";
    }
    else{
      x.hidden="true";
    }
    
  }
  function formValidate1()
  {
    var pass = document.getElementById("pass").value;

    var x = document.getElementById("dispP");
    x.hidden="true";
    if(pass==="")
    {
      x.innerHTML="This field must be filled*";
      x.hidden="false";
    }
    else{
      x.hidden="true";
    }
    
  }