import { clicks, click_power, restoreSavedClicks, restoreDefaultClicks, updateCounter, updateStore } from './index.js';
import { store, restoreSavedStore, restoreDefaultStore } from './store.js';

function saveGame() {
    localStorage.setItem('clicks', clicks);
    localStorage.setItem('click_power', click_power);

    localStorage.setItem('store', JSON.stringify(store));

    localStorage.setItem('saveGame', true);
}

function loadGame() {
    if (localStorage.getItem('saveGame') === null) {
        resetGame();
    } else {
        let loaded_clicks = localStorage.getItem('clicks') || 0;
        let loaded_click_power = localStorage.getItem('click_power') || 1;

        let loaded_store = JSON.parse(localStorage.getItem('store')) || restoreDefaultStore();

        restoreSavedClicks(loaded_clicks, loaded_click_power);
        restoreSavedStore(loaded_store);
        updateCounter();
        updateStore();
    }
}

function resetGame() {
    localStorage.clear();
}

export { saveGame, loadGame, resetGame };