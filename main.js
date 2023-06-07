import { catchError } from './errors.js';
import { storage, favouriteCities, currentCity } from './storage.js';
import { renderNowTab, renderDetailsTab, renderFavourites } from './render.js';
import { CURRENT_CITY_INPUT, SEARCH_FORM, BUTTONS, TABS, SERVER_URL_WEATHER, SERVER_URL_FORECAST, API_KEY, BUTTON_FAVOURITE, TAB_FORECAST_LIST, TEMPLATE, TAB_FORECAST_DATE, TAB_FORECAST_TIME, TAB_FORECAST_TEMP, TAB_FORECAST_FEELS_LIKE, TAB_FORECAST_WEATHER, TAB_FORECAST_WEATHER_ICON, BUTTON_FORECAST, CURRENT_CITY_ELEMENT, TAB_FORECAST_CURRENT_CITY, LOCATIONS_LIST } from './constants.js';
export { deleteLocation, createElement, executeFetchNowDetails, executeFetchForecast }


// EventListeners
BUTTON_FAVOURITE.addEventListener('click', addLocation);
BUTTON_FORECAST.addEventListener('click', executeFetchForecast);
SEARCH_FORM.addEventListener('submit', executeFetchNowDetails);


// Tab-switching
BUTTONS.forEach(button => {
    button.addEventListener('click', (e) => selectTab(e, button));
});

function selectTab(e, button) {
    const selectedButtonId = e.target.dataset.button;
    const selectedTab = document.querySelector('#' + selectedButtonId);

    BUTTONS.forEach(button => button.classList.remove('button-tab-active'));
    TABS.forEach(tab => tab.classList.remove('tab-active'));

    button.classList.add('button-tab-active');
    selectedTab.classList.add('tab-active');
}


// API-requests
async function executeFetchNowDetails(e) {
    e.preventDefault();
    const cityName = CURRENT_CITY_INPUT.value.trim() || e.target.textContent;
    const url = `${SERVER_URL_WEATHER}?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const json = await response.json();

        if (!response.ok) {
            throw response;
        }

        CURRENT_CITY_INPUT.value = '';
        console.log(json);
        saveCurrentCityData(json);
    } catch (error) {
        catchError(error);
    }
    if (document.querySelector('.error')) document.querySelector('.error').remove();
}

async function executeFetchForecast(e) {
    let cityName;
    e.target.textContent === 'Forecast' ? cityName = CURRENT_CITY_ELEMENT.textContent : cityName = e.target.textContent;
    TAB_FORECAST_CURRENT_CITY.textContent = cityName;
    const url = `${SERVER_URL_FORECAST}?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        console.log(url)
        const json = await response.json();
        console.log(json);


        for (let i = 0; i < json.list.length; i++) {
            const item = TEMPLATE.content.cloneNode(true);
            TAB_FORECAST_LIST.append(item);

        }

        const a = document.querySelectorAll('.tab-forecast-temp');
        const b = document.querySelectorAll('.tab-forecast-feels-like');
        const c = document.querySelectorAll('.tab-forecast-weather');
        console.log(a)
        console.log(b)
        console.log(c)
        a.forEach((item, index) => item.textContent = json.list[index].main.temp);
        b.forEach((item, index) => item.textContent = json.list[index].main.feels_like);
        c.forEach((item, index) => item.textContent = json.list[index].weather[0].main);
        // foo(json);
    } catch (error) {

    }
}

function foo(json) {
    document.querySelectorAll('.tab-forecast-temp').forEach((item, index) => item.textContent = json.list[index].main.temp);
    document.querySelectorAll('.tab-forecast-feels-like').forEach((item, index) => item.textContent = json.list[index].main.feels_like);
}


//TODO: refactoring
//Create random element
function createElement(tag, className, content, position, attribute = null, attributeValue = null) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.setAttribute(attribute, attributeValue);
    element.innerHTML = content;
    position.append(element);
}


//Save current city data
function saveCurrentCityData(json) {
    currentCity.length = 0;
    currentCity.push({
        name: json.name,
        temp: json.main.temp,
        feelsLike: json.main.feels_like,
        weather: json.weather[0].main,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
        icon: json.weather[0].icon,
        id: json.id,
        timezone: json.timezone
    });
    storage.saveCurrentCity();
    renderNowTab();
    renderDetailsTab();
}


//Save to favourites
function addLocation() {
    const { name } = currentCity[0];

    if (favouriteCities.has(name)) {
        setTimeout(() => createElement('div', 'error', 'Город уже добавлен', SEARCH_FORM), 0);
        setTimeout(() => document.querySelector('.error').remove(), 2000);
        return;
    };

    favouriteCities.add(name);
    storage.saveFavouriteCities();
    renderFavourites();
}


//Remove from favourites
function deleteLocation(e) {
    e.stopPropagation();
    const targetId = e.target.getAttribute('id');
    favouriteCities.delete(targetId);
    storage.saveFavouriteCities();
    renderFavourites();
}


renderNowTab();
renderFavourites();
renderDetailsTab();