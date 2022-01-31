
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



taskBTN.addEventListener("click", function(){
    const task = inputValue.value;
    

    if(task !== ""){
    console.log(task);
    inputValue.value = "";

    }else{

     // do nothing

    }

});

// let url = "/add-task";
// let dictionary = task;

// function post(dictionary, url, method) {
// 	method = method || "post"; // post (set to default) or get

// 	// Create the form object
// 	var form = document.createElement("form");
// 	form.setAttribute("method", method);
// 	form.setAttribute("action", url);

// 	// For each key-value pair
// 	for (key in dictionary) {
// 		//alert('key: ' + key + ', value:' + dictionary[key]); // debug
// 		var hiddenField = document.createElement("input");	
// 		hiddenField.setAttribute("type", "hidden"); 
// 		hiddenField.setAttribute("name", key);
// 		hiddenField.setAttribute("value", dictionary[key]);
// 		// append the newly created control to the form
// 		form.appendChild(hiddenField); 
// 	}

// 	document.body.appendChild(form); // inject the form object into the body section
// 	form.submit();
// }




// let task = inputValue.value;
// inputValue.value = "";
    
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", yourUrl, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify({
//         value: task
//     }));