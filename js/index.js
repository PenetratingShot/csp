

/* https://www.w3resource.com/javascript/form/email-validation.php */
function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex is the most easy to understand language format ever conceived

  if(inputText.value.match(mailformat)) {
    document.contactForm.email.focus();
    document.body.getElementById("emailAlert").style.display = 'none';

    return true;
  } else {
    document.body.getElementById("emailAlert").style.visiblity = 'block';
    document.contactForm.email.focus();

    return false;
  }
}