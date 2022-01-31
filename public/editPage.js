
//Bottons
const saveBTN = document.querySelector("#save-btn");
const backBTN = document.querySelector("#back-btn");
const formBTN = document.querySelector("#form");
const taskBTN = document.querySelector(".fa-plus");
const inputValue = document.querySelector(".other-type-div");


// Event listnser
backBTN.addEventListener("click", function(){
   window.location = "/client";
});

const taskArry = [];

taskBTN.addEventListener("click", function(){
    const task = inputValue.value;

    if(task !== ""){
        inputValue.value = "";
        taskArry.push(task);
        console.log("task was: "+task);
        console.log(taskArry);

    }else{

     // do nothing

    }

});

