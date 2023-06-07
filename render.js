import { getTime } from './helpers.js';
import { executeFetchNowDetails, executeFetchForecast } from './main.js'
import { createElement } from './main.js'
import { deleteLocation } from './main.js'
import { favouriteCities, currentCity } from './storage.js';
import { SEARCH_FORM, CURRENT_CITY_ELEMENT, CURRENT_TEMPERATURE, TAB_NOW_WEATHER_ICON, TAB_DETAILS_CURRENT_CITY, TAB_DETAILS_TEMP, TAB_DETAILS_FEELS_LIKE, TAB_DETAILS_WEATHER, TAB_DETAILS_SUNRISE, TAB_DETAILS_SUNSET, LOCATIONS_LIST, DETAILS_DATA_ELEMENTS } from './constants.js';
export { renderNowTab, renderDetailsTab, renderFavourites }


const renderFunctions = {
    renderNowTab() {
        if (currentCity[0]) {
            const { name, temp, icon } = currentCity[0];
            CURRENT_CITY_ELEMENT.textContent = name;
            CURRENT_TEMPERATURE.textContent = temp;
            TAB_NOW_WEATHER_ICON.src = `https://openweathermap.org/img/wn/${icon}@4x.png`
        }
        else {
            CURRENT_CITY_ELEMENT.textContent = '';
            CURRENT_TEMPERATURE.textContent = '';
            TAB_NOW_WEATHER_ICON.src = 'images/icons-cloud.png';
        }
    },

    renderDetailsTab() {
        if (currentCity[0]) {
            const { name, temp, feelsLike, weather, sunrise, sunset } = currentCity[0];
            TAB_DETAILS_CURRENT_CITY.textContent = name;
            TAB_DETAILS_TEMP.textContent = temp;
            TAB_DETAILS_FEELS_LIKE.textContent = feelsLike;
            TAB_DETAILS_WEATHER.textContent = weather;
            TAB_DETAILS_SUNRISE.textContent = getTime(sunrise);
            TAB_DETAILS_SUNSET.textContent = getTime(sunset);
        }
        else {
            TAB_DETAILS_CURRENT_CITY.textContent = '';
            DETAILS_DATA_ELEMENTS.forEach(item => item.textContent = '');
        }
    },

    renderFavourites() {
        const locationsItems = document.querySelectorAll('.locations-item');
        locationsItems.forEach(item => item.remove());


        const children = document.body.children;
        function clearDom(children) {
            let selector = '.locations-item';
            for (let child of children) {
                if (child.classList.contains(selector)) {
                    child.remove();
                }
                return clearDom(children[child]);
            }

        }

        favouriteCities.forEach(value => {
            createElement('li', 'locations-item', value, LOCATIONS_LIST, 'id', value);
            createElement('button', 'button-close-locations-item', '', document.getElementById(value), 'id', value);
        });

        const newLocationsItems = document.querySelectorAll('.locations-item');
        newLocationsItems.forEach(item => item.addEventListener('click', (e) => {
            SEARCH_FORM.reset();
            executeFetchNowDetails(e);
            executeFetchForecast(e);
        }));
        const buttonCloseLocationsItem = document.querySelectorAll('.button-close-locations-item');
        buttonCloseLocationsItem.forEach(item => item.addEventListener('click', deleteLocation));
    }
}

const renderNowTab = () => renderFunctions.renderNowTab();
const renderDetailsTab = () => renderFunctions.renderDetailsTab();
const renderFavourites = () => renderFunctions.renderFavourites();