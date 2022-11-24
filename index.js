import { store } from './store.js';

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

var clicks = 0;
var click_power = 1;


// Page Load
window.addEventListener('load', (event) => {
    // pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    pixel.addEventListener('click', function() { doClick(); });

    updateStore();
});


// Interval + Update
window.setInterval(function() {
    updateCounter();
    updateStore();
}, 10);

function updateCounter() {
    counter.innerHTML = numberformat.formatShort(clicks);
}

function updateStore() {
    var storeContainer = document.getElementById('storeContainer');
    for (let i = 0; i < store.length; i++) {
        var item = store[i];

        if (!item.is_unlocked && item.unlock_req()) {
            item.is_unlocked = true;

            var storeCard = document.createElement('div');
            var storeCardLeft = document.createElement('div');
            var storeCardRight = document.createElement('div');
            var storeCardTitle = document.createElement('div');
            var storeCardDesc = document.createElement('div');
            var storeCardPrice = document.createElement('div');

            storeCard.classList.add('storeCard');
            storeCardLeft.classList.add('storeCardLeft');
            storeCardRight.classList.add('storeCardRight');
            storeCardTitle.classList.add('storeCardTitle');
            storeCardDesc.classList.add('storeCardDesc');
            storeCardPrice.classList.add('storeCardPrice');

            storeCardLeft.appendChild(storeCardTitle);
            storeCardLeft.appendChild(storeCardDesc);
            storeCardRight.appendChild(storeCardPrice);
            storeCard.appendChild(storeCardLeft);
            storeCard.appendChild(storeCardRight);

            storeCardTitle.innerHTML = item.name;
            storeCardDesc.innerHTML = item.desc;
            storeCardPrice.innerHTML = item.cost;

            storeCard.addEventListener('click', buyItem(item));

            item.listing = storeCard;
            
            storeContainer.appendChild(storeCard);
        }
    }
}

function buyItem(item) {
    console.log('peen');
    if (clicks >= item.cost) {
        item.owned++;
        item.cost = item.cost * 1.1;
        clicks -= item.cost;
        var listingCost = item.listing.getElementById('storeCardCost');
        listingCost.innerHTML = item.cost;
        console.log(item.owned);
    }
}


// Click Event
function doClick() {
    // pixel.style.background = colors[Math.floor(Math.random() * colors.length)];
    clicks += click_power;
    updateCounter();
}

export { clicks };