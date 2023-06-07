import { createElement } from './main.js'
import { SEARCH_FORM } from './constants.js'
export { catchError }


// Errors-list
const ERRORS = {
    FAILED_TO_FETCH: 'Не удалось выполнить запрос, проверьте адрес запроса',
    CANT_PARSE_JSON: 'Не удалось прочитать JSON',
    CITY_NOT_FOUND: 'Нет такого города',
    API_KEY_PROBLEM: 'Проверьте АПИ-ключ',
    TOO_MANY_REQUESTS: 'Вы превысили лимит запросов (60 в минуту)',
    PLEASE_CONTACT_DEVELOPERS: 'Свяжитесь с разработчиками',
}


// Errors handling
function catchError(error) {
    let errorMessage;
    if (error.message === 'Failed to fetch') {
        errorMessage = ERRORS.FAILED_TO_FETCH;
    }
    if (error instanceof SyntaxError) {
        errorMessage = ERRORS.CANT_PARSE_JSON;
    }
    if (error instanceof Response) {
        switch (error.status) {
            case 401:
                errorMessage = ERRORS.API_KEY_PROBLEM;
                break;
            case 404:
                errorMessage = ERRORS.CITY_NOT_FOUND;
                break;
            case 429:
                errorMessage = ERRORS.TOO_MANY_REQUESTS;
                break;
            case (error.status >= 500):
                errorMessage = ERRORS.PLEASE_CONTACT_DEVELOPERS;
                break;
        }
    }
    createElement('div', 'error', errorMessage, SEARCH_FORM);
    throw new Error(errorMessage);
}