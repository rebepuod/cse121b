/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Rebeca Puodziunas",
    photo: "images/profile.jpeg",
    favoriteFoods: ["Pasta", "Canelones", "Ravioli", "IceCream"],
    hobbies: ["Sing", "Listening music", "Walk"],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Brazil",
        length: "2 years"
    },
    {
        place: "Italy",
        length: "1 year"
    },
       
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile["name"];
/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(element => {
   let newLi= document.createElement("li");
//    document.querySelector("li").textContent(element);
   newLi.textContent = element;
   document.querySelector("#favorite-foods").appendChild(newLi);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(placeLived => {
    let newDt = document.createElement("dt");
    newDt.textContent = placeLived.place;
    document.querySelector("#places-lived").appendChild(newDt);

    let newDd = document.createElement("dd");
    newDd.textContent = placeLived.length;
    document.querySelector("#places-lived").appendChild(newDd);
});
