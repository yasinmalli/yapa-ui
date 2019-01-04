import request from 'utils/request'
import { call } from 'redux-saga/effects';

// export default function * apiRequest(resource, queryParams, requestOptions) {
export default function * apiRequest(resource, queryParams = {}, options = {}, headers = {}) {

    // todo: config.base_url
    var url = `https://localhost:44387/api/${resource}`;    
    const queryString = Object.keys(queryParams)
        .map((key) => { return `${key}=${queryParams[key]}`; })
        .join('&');
    if (queryString)
        url += '?' + queryString;

    var reqOptions = options || {};
    reqOptions.credentials = options.credentials || 'include';
    reqOptions.mode = 'cors';
    
    reqOptions.headers = headers || {};
    if (!reqOptions.headers['Content-Type']) {
        reqOptions.headers['Content-Type'] = 'application/json';
    }

    const result = yield call(request, `${url}`, reqOptions);
    if (typeof result !== 'object' || result === null || result.items === undefined) {
        return result;
    }
}