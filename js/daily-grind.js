// alert("Welcome back");

/* 
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

pic - the src of the coffee
alt - the alt tag for coffee pic
desc - description of the coffee
day - the day of the week for the coffee
color - the color associated with the coffee

*/
function coffeeTemplate(coffee) {
    return `
    <p>
	<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
		<strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong
		class="feature">${coffee.name}</strong>, ${coffee.desc}
    </p>
    `;
}

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);



if(urlParams.has("day")){//from querystring
myDay = urlParams.get("day");
}

// Testing Days
// myDay = 6;
myDay = parseInt(myDay);

switch (myDay) {
    case 0:
    today = "Sunday";
    coffee = {
        name: "Cold-Brew",
        pic: "images/cold-brew.jpg",
        alt: "a picture of Cold-Brew",
        color: "pink",
        day: "Saturday",
        desc: "The Only Shots You Need."
    }
    break;
    
    case 1:
        today = "Monday";
        coffee = {
            name: "Drip Coffee",
            pic: "images/drip.jpg",
            alt: "a picture of Drip Coffee",
            color: "skyblue",
            day: "Sunday",
            desc: "Better Beans, Better Coffee.!"
        }
        break;

    case 2:
        today = "Tuesday";
        coffee = {
            name: "Caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "a picture of Caramel-latte",
            color: "red",
            day: "Monday",
            desc: "Love at First Sip.."
        }
        break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "a picture of bubble tea",
            color: "gold",
            day: "Tuesday",
            desc: "A Rare Experience in Taste."
        }
        break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "a picture of a mocha",
            color: "purple",
            day: "Wednesday",
            desc: "Have a Brew-Ti-Ful Day."
        }
        break;

        case 5:
        today = "Friday";
        coffee = {
            name: "Pumpkin-Spice-Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "a picture of a pumpkin-spice-latte",
            color: "brown",
            day: "Thursday",
            desc: "The Perfect Blend."
        }
        break;

        case 6:
        today = "Saturday";
        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "a picture of a Frappaccino",
            color: "green",
            day: "Friday",
            desc: "Enjoy the Grind."
        }
        break;



        default:
            today = "Something went wrong!";
}

// places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// changes color of HTML element
document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);