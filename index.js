const colors = [
    "#ef476f",
    "#ff7538",
    "#ffce5c",
    "#07c566",
    "#04aead",
    "#0197f4",
    "#9f59c5",
];

const pixel = document.getElementById('pixel');
const counter = document.getElementById('counter');

var mouse_down = false;
var auto_click_int = 30;
var auto_click_time = 0;

var clicks = 0;
var click_power = 1;


// Page Load
window.addEventListener('load', (event) => {
    // pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    pixel.addEventListener('click', function() { doClick(); });
});


// Interval + Update
window.setInterval(function() {
    if (mouse_down) {
        if (auto_click_time == auto_click_int) {
            doClick();
            auto_click_time = 0;
        } else {
            auto_click_time++;
        }
    }
    updateCounter();
}, 10);

function updateCounter() {
    counter.innerHTML = numberformat.formatShort(clicks);
}


// Click Event
function doClick() {
    // pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    clicks += click_power;
    updateCounter();
}

function mouseDown() { mouse_down = true; }
function mouseUp() { mouse_down = false; auto_click_time = 0; }