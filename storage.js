export { storage, favouriteCities, currentCity }


const storage = {
    saveFavouriteCities() {
        localStorage.setItem('favouriteCities', JSON.stringify([...favouriteCities]));
    },
    saveCurrentCity() {
        localStorage.setItem('currentCity', JSON.stringify(currentCity));
    },
    getFavouriteCities() {
        return new Set(JSON.parse(localStorage.getItem('favouriteCities')));
    },
    getCurrentCity() {
        return JSON.parse(localStorage.getItem('currentCity'));
    }
}

const favouriteCities = storage.getFavouriteCities() || new Set();
const currentCity = storage.getCurrentCity() || [];

