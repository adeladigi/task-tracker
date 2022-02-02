


const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submitBTN = document.querySelector("#submit-btn");




submitBTN.addEventListener("click", function(){
     let url = "/login"
    const ship = {
        email: email.value,
        password: password.value
     };
     
     fetch(url, {
         method: "POST",
         body: JSON.stringify(ship),
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }});

           window.location.href ="/client";
});


//1# need to  setup it with a form post request for more security

