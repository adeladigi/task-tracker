
//Bottons
const saveBTN = document.querySelector("#save-btn");
const backBTN = document.querySelector("#back-btn");
const formBTN = document.querySelector("#form");
const inputValue = document.querySelector(".other-type-div");
const taskLight = document.querySelector("#taskLight").value;
const deleteTask = document.querySelector(".fa-trash-alt");
const addTaskBTN = document.querySelector("#fa-plus");



const task0 = document.querySelector("#task0");
const task1 = document.querySelector("#task1");
const task2 = document.querySelector("#task2");
const task3 = document.querySelector("#task3");
const task4 = document.querySelector("#task4");

//form inputs
const firstName = document.querySelector("#fName-i");
const lastName = document.querySelector("#lName-i");
const gender = document.querySelector("#gender-i");
const address = document.querySelector("#address-i");
const city = document.querySelector("#city-i");
const state = document.querySelector("#state-i");
const zip = document.querySelector("#zip-i");






// sending total data to sever to save in database
saveBTN.addEventListener("click", function(){
    let url = "/client-bio";
    
    const ship = {
        fname: firstName.value,
        lname: lastName.value,
        gender: gender.value,
        address: address.value,
        state: state.value,
        city: city.value,
        zip: zip.value
     };
     
     fetch(url, {
         method: "POST",
         body: JSON.stringify(ship),
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           }});
           
           // resetting value's to null
           firstName.value = "";
           lastName.value = "";
           gender.value = "";
           address.value = "";
           city.value = "";
           state.value ="";
           zip.value = "";  
  
});

// switches
let taskSwitch = taskLight;



// Event listnser
backBTN.addEventListener("click", function(){
   window.location = "/client";
});

// adding task to server ARRY
addTaskBTN.addEventListener("click", function(){
    let urlPath ="/add-task";
    let selectedTask = inputValue.value;
    
    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});



// section for deleting tasks btn
task0.addEventListener("click", function(){
    let selectedTask = task0.textContent;
    let urlPath = "/delete-task";

    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});


task1.addEventListener("click", function(){
    let selectedTask = task1.textContent;
    let urlPath = "/delete-task";

    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});


task2.addEventListener("click", function(){
    let selectedTask = task2.textContent;
    let urlPath = "/delete-task";

    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});

task3.addEventListener("click", function(){
    let selectedTask = task3.textContent;
    let urlPath = "/delete-task";
       
    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});

task4.addEventListener("click", function(){
    let selectedTask = task4.textContent;
    let urlPath = "/delete-task";

    sendTask(selectedTask, urlPath)
    window.location.href ="/edit";
});




  /// send selected task to server function
function sendTask(task, url){

    const ship = {
       task: task,
    };
    
    fetch(url, {
        method: "POST",
        body: JSON.stringify(ship),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }});
    
    }


    function saveForm(url){

        const ship = {
            task: task,
         };
         
         fetch(url, {
             method: "POST",
             body: JSON.stringify(ship),
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
               }});

    }


    