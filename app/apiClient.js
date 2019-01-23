import request from 'utils/request'
import { call, select } from 'redux-saga/effects';
import { selectConfig } from 'containers/App/selectors';

// export default function * apiRequest(resource, queryParams, requestOptions) {
export default function * apiRequest(resource, queryParams = {}, options = {}, headers = {}) {

    var config = yield select(selectConfig);
    var url = `${config.api_url}/api/${resource}`;
        
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