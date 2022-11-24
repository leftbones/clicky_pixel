import { clicks } from './index.js';

var clicker = {
    name: "Clicker",                           // Display name
    desc: "Clicks 1 time every 10 seconds",    // Description
    owned: 0,                                  // How many the player owns
    cost: 15,                                  // Current cost
    base_cost: 15,                             // Base cost
    click_power: 0.1,                          // Clicks per update
    is_unlocked: false,                        // Listed in the store (done in index.js/storeUpdate)
    listing: null,                             // Reference to the store listing (done in index.js/storeUpdate)
    unlock_req: function() { return true; }    // Unlock requirement check
};

var super_clicker = {
    name: "Super Clicker",
    desc: "Clicks 1 time every second",
    owned: 0,
    cost: 100,
    base_cost: 100,
    click_power: 1.0,
    is_unlocked: false,
    listing: null,
    unlock_req: function() { return clicks >= 50; }
};

var store = [
    clicker, super_clicker
];

export { store };