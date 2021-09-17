/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const fragment_doc = document.createDocumentFragment();
const List = document.getElementsByTagName('section');
const build_nav = document.getElementsByClassName('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (i = 1; i < List.length; i++) {

    const newItem = document.createElement('li');
    const anchor = document.createElement('a');
    newItem.innerHTML = List[i].getAttribute('data-nav');
    

    build_nav.appendChild(newItem)

}

// taken from another code, for understanding purposes only







/*function active_class(event)

{
    const newSec = document.getElementById(event.target.getAttribute('data-section-id'));
    newSec.scrollIntoView({behavior : "smooth"});



}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/*window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        document.getElementById("header").style.fontSize = "30px";

    }

    else
    {
        document.getElementById("header").style.fontSize = "90px";
    }
    
}
*/


