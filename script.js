



const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName'); 
const email = document.querySelector('#mail');
const password = document.querySelector('#password'); 

const form = document.querySelector('#myForm');

var error = document.getElementsByClassName('message-error');
var logo = document.getElementsByClassName('icon-error');

var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   


form.addEventListener('submit', function (event) {

	 event.preventDefault();

	if ( firstName.value == "")  {
		error[0].innerHTML = "First Name cannot be empty";	
		logo[0].style.opacity = "1";
	}  if (lastName.value == "") {
		error[1].innerHTML = "Last Name cannot be empty";	
		logo[1].style.opacity = "1"
	}  if ( !email.value.match(regEx)) {
		error[2].innerHTML = "Looks like is not an email";	
		logo[2].style.opacity = "1"
	}  if (password.value == "")  {
		error[3].innerHTML = "Password cannot be empty";	
		logo[3].style.opacity = "1"		
	}
 
})









