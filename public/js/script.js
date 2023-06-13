let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function signup() {
 // Retrieve form data
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 // Retrieve other form field values

 // Perform validation or submit the form data to the server
 // Example:
 if (username && password) {
   // Valid form data, submit the form or perform other actions
   console.log("Sign up successful!");
   // You can make an AJAX request to send the form data to the server
   // or perform any other necessary actions.
 } else {
   // Invalid form data, display an error message or take appropriate action
   console.log("Please fill in all the required fields.");
 }
}