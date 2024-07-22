
import { updateFullHeart, addFullHeart, hearts } from "./hearts.js";

export function loadHeartsFromStorage() {
    let hrts = JSON.parse(localStorage.getItem("hearts")) || [];
    return hrts;
}
export function pushToLocalStorageHearts(country, isHeartFull) {
    if (updateFullHeart(country, isHeartFull) == true) {
        localStorage.setItem("hearts", JSON.stringify(hearts));
    } else {
        addFullHeart(country, isHeartFull);
        localStorage.setItem("hearts", JSON.stringify(hearts));
    }
}