



const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName'); 

const email = document.querySelector('#mail');
const password = document.querySelector('#password'); 

var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  

const myForm = document.querySelector('#myForm');

var logo = document.getElementsByClassName('icon-error');


myForm.addEventListener('submit', function (event) {

	var error;
	var error1;
	var error2;
	var error3;

	if ( firstName.value == "")  {
		error = "First Name cannot be empty";	
		logo[0].style.opacity = "1";	
	} else {
		error = "";
		logo[0].style.opacity = "0";
	}


	 if (lastName.value == "") {
		error1 = "Last Name cannot be empty";
		logo[1].style.opacity = "1";		
	}  else {
		error1 = "";
		logo[1].style.opacity = "0";
	}

	 if (!email.value.match(regEx)) {
		error2 = "Looks like is not an email";
		logo[2].style.opacity = "1";		
	}  else {
		error2 = "";
		logo[2].style.opacity = "0";
	}

	 if (password.value == "") {
		error3 = "Password cannot be empty";
		logo[3].style.opacity = "1";		
	}  else {
		error3 = "";
		logo[3].style.opacity = "0";
	}

				
	  if (error || error1 || error2 || error3) {
		event.preventDefault();	
	    document.getElementById("error").innerHTML = error ;
	    document.getElementById("error1").innerHTML = error1 ;
	    document.getElementById("error2").innerHTML = error2 ;
	    document.getElementById("error3").innerHTML = error3 ;
	    return false
	}

	
});





