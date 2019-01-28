import 'whatwg-fetch';

export default function request(url, options) {    
    return fetch(`${url}`, options)
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }

            let error = new Error(response.statusText);
            error.response = response;
            return response.json().then(json => {
                error.responseError = json;
            }).finally(() => {
                throw error;
            });
        })
        .then(response => {
            return response.text().then(function(text) {
                return text ? JSON.parse(text) : {};
            });
        })
        .catch(error => { console.error(`Error: ${error}`); });   
}