
// imports
import { loadHeartsFromStorage } from "./storage.js";

export let hearts = loadHeartsFromStorage();
export function searchFullHeart(country) {
    for (let i = 0; i < hearts.length; i++) {
        if (hearts[i].name == country.name.common.toLowerCase()) {
            return hearts[i].isHeart;
        }
    }
    return false;
}

export function updateFullHeart(country, isHeart) {
    for (let i = 0; i < hearts.length; i++) {
        if (hearts[i].name == country.name.common.toLowerCase()) {
            hearts[i].isHeart = isHeart;
            return true;
        }
    }
    return false;
}
export function addFullHeart(country, isHeart) {
    hearts.push({ name: country.name.common.toLowerCase(), isHeart: isHeart });
}