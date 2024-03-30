/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");

        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", temple.templeName);

        article.appendChild(templeName);
        article.appendChild(img);
        templesElement.appendChild(article);
//revisar------------------------------------
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}




/* reset Function */
function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */

function filterTemples(temples){
    reset();
    let filter = document.querySelector("#filtered").value;

    switch (filter) {
        case "utah":
            const inUtah = temples.filter((temple) => {
                const loc = temple.location;

                return loc.includes("Utah");
            });  
            
            displayTemples(inUtah);
            break;
        
        case "notutah":

            const notUtah = temples.filter((temple) =>{
                const loc = temple.location;

                return !loc.includes("Utah");
            })

            displayTemples(notUtah);
            break;

        case "older":

            const older = temples.filter((temple) => {
                const dedic = temple.dedicated;
                
                const date = new Date(1950, 0, 1).getTime();
                const dedicatedDate = new Date(dedic).getTime();
                return dedicatedDate < date;
            })
            displayTemples(older);
            break;

        case "all":
            displayTemples(temples);
            break;

    }
}


/* Event Listener */


document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)});

getTemples();