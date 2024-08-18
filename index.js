
function checkMobileView() {
    if (window.innerWidth <= 500) {
        // Code for mobile view
        // Do something with a particular element
        document.querySelector('.dropdown').style.display = "none";

    } else {
        // Code for desktop view
        console.log("Desktop view activated!");
        document.querySelector('.dropdown').style.display = "flex";
        document.querySelector('body').style.backgroundColor = "hsl(36, 100%, 99%)";
    }
}
window.onload = checkMobileView;

// Run on window resize
window.onresize = checkMobileView;
var button1 = document.querySelector('.menu > svg');
var button2 = document.querySelector('#remove');

button1.addEventListener('click', 
    function dropdownMenu (){
        document.querySelector('.dropdown').style.display = "flex";
        document.querySelector('body').style.backgroundColor = "hsl(233, 8%, 79%)";
        document.body.style.overflow = 'hidden';
    }
);
button2.addEventListener('click', 
    function removedropdownMenu (){
        document.querySelector('.dropdown').style.display = "none";
        document.querySelector('body').style.backgroundColor = "hsl(36, 100%, 99%";
        document.body.style.overflow = 'auto';
    }
);