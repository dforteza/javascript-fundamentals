// ALERT
alert("This is an alert!");

// CONFIRM
let respuesta = confirm("Do you want to proceed?");
if (respuesta)
    console.log("User chose to proceed.");
else
    console.log("User canceled the action.");

// PROMPT
let nombre = prompt("Please enter your name:", "Guest");
if (nombre !== null) 
    console.log("Hello, " + nombre + "!");