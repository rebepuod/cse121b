/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Rebeca Puodziunas";
let currentYear = 2024;
let profilePicture = "images/profile.jpeg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");  /*???????*/



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)



/* Step 5 - Array */
let foods = ["Ravioles", "Canelones", "Pasta", "IceCream"];

foodElement.innerHTML = foods;
let newFood = "Nutella";
let a = foods.push(newFood);

foodElement.innerHTML += `<br>${foods}`;
let b = foods.shift();

foodElement.innerHTML += `<br>${foods}`;

let c = foods.pop();
foodElement.innerHTML += `<br>${foods}`;

