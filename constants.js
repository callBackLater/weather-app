export { CURRENT_CITY_INPUT, SEARCH_FORM, BUTTONS, TABS, SERVER_URL_WEATHER, SERVER_URL_FORECAST, API_KEY, CURRENT_CITY_ELEMENT, CURRENT_TEMPERATURE, BUTTON_FAVOURITE, TAB_NOW_WEATHER_ICON, TAB_DETAILS_CURRENT_CITY, TAB_DETAILS_TEMP, TAB_DETAILS_FEELS_LIKE, TAB_DETAILS_WEATHER, TAB_DETAILS_SUNRISE, TAB_DETAILS_SUNSET, DETAILS_DATA_ELEMENTS, LOCATIONS_LIST, TAB_FORECAST_LIST, TEMPLATE, TAB_FORECAST_DATE, TAB_FORECAST_TIME, TAB_FORECAST_TEMP, TAB_FORECAST_FEELS_LIKE, TAB_FORECAST_WEATHER, TAB_FORECAST_WEATHER_ICON, BUTTON_FORECAST, TAB_FORECAST_CURRENT_CITY }


// Search-form
const CURRENT_CITY_INPUT = document.querySelector('.search-bar');
const SEARCH_FORM = document.querySelector('.search-bar-form');


// Tab-switching
const BUTTONS = document.querySelectorAll('.button-tab');
const TABS = document.querySelectorAll('.tab');


//URL & API-key
const SERVER_URL_WEATHER = 'http://api.openweathermap.org/data/2.5/weather';
const SERVER_URL_FORECAST = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '492b87f4c8e299cb55f1202a33ba2d75';


//Now-tab
const CURRENT_CITY_ELEMENT = document.querySelector('.tab-now-current-city');
const CURRENT_TEMPERATURE = document.querySelector('.tab-now-temp');
const BUTTON_FAVOURITE = document.querySelector('.button-tab-now-favourite');
const TAB_NOW_WEATHER_ICON = document.querySelector('.tab-now-weather-icon');


//Details-tab
const TAB_DETAILS_CURRENT_CITY = document.querySelector('.tab-details-current-city');
const TAB_DETAILS_TEMP = document.querySelector('.tab-details-temp');
const TAB_DETAILS_FEELS_LIKE = document.querySelector('.tab-details-feels-like');
const TAB_DETAILS_WEATHER = document.querySelector('.tab-details-weather');
const TAB_DETAILS_SUNRISE = document.querySelector('.tab-details-sunrise');
const TAB_DETAILS_SUNSET = document.querySelector('.tab-details-sunset');
const DETAILS_DATA_ELEMENTS = document.querySelectorAll('.tab-details-forecast-list dd');

// Forecast-tabs
const TEMPLATE = document.querySelector('#template');
const TAB_FORECAST_LIST = document.querySelector('.tab-forecast-wrapper');
const TAB_FORECAST_DATE = document.querySelector('.tab-forecast-date');
const TAB_FORECAST_TIME = document.querySelector('.tab-forecast-time')
const TAB_FORECAST_TEMP = document.querySelector('.tab-forecast-temp');
const TAB_FORECAST_FEELS_LIKE = document.querySelector('.tab-forecast-feels-like');
const TAB_FORECAST_WEATHER = document.querySelector('.tab-forecast-weather');
const TAB_FORECAST_WEATHER_ICON = document.querySelector('.tab-forecast-weather-icon');
const BUTTON_FORECAST = document.querySelector('.button-forecast');
const TAB_FORECAST_CURRENT_CITY = document.querySelector('.tab-forecast-current-city');



//Favourites-list
const LOCATIONS_LIST = document.querySelector('.locations-list');

