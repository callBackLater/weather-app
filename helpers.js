import { currentCity } from "./storage.js";
export { getTime }


const timeFunctions = {
    getTime(time) {
        const localTime = new Date();
        const localTimezoneOffset = localTime.getTimezoneOffset() * 60 * 1000;
        const sunriseSunsetTime = time * 1000 + localTimezoneOffset + currentCity[0].timezone * 1000;
        const currentCityTimeSunriseSunset = new Date(sunriseSunsetTime);
        return getTimeFormatted(currentCityTimeSunriseSunset);
    },

    getTimeFormatted(date) {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}

const getTime = (time) => timeFunctions.getTime(time);
const getTimeFormatted = (date) => timeFunctions.getTimeFormatted(date);