let editBTN = document.querySelector(".edit-div");

let timerBTN = document.querySelector(".time-icon");

editBTN.addEventListener("click", function(){
    window.location.href ="/edit";
});

timerBTN.addEventListener("click", function(){
    console.log("timer was clicked");
});