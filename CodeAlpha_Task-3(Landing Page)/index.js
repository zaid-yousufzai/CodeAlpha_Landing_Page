let navbar = document.getElementById("navbar");

navbar.classList.add("sticky");

function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();

  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myForm"]["name"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }

  if (name.length == 0) {
    seterror("name", "*Length of name cannot be zero!");
    returnval = false;
  }

  var email = document.forms["myForm"]["email"].value;
  if (email.length > 25) {
    seterror("email", "*Email length is too long");
    returnval = false;
  }

  var phone = document.forms["myForm"]["phone"].value;
  if (phone.length != 10) {
    seterror("phone", "*Phone number should be of 10 digits!");
    returnval = false;
  }

  if (returnval == true) {
    alert("success");
    window.location.href = "index.html";
  }
  return returnval;
}
