import axios from 'axios';

const MAIN_URL = "http://212.34.230.218:5001/api";

const getRequest = (url, params) => {
    return request('GET', url, params);
}

const postRequest = (url, data, params) => {
    return request('POST', url, params, data);
}

const putRequest = (url, data, params) => {
    return request('PUT', url, params, data);
}

const deleteRequest = (url) => {
    return request('DELETE', url);
}

const request = (method, url, params, data) => {

    const finalUrl = `${MAIN_URL}/${url}`

    let options = {
        url: finalUrl,
        method,
        params,
        data
        // cancelToken: this.source.token
    };

    return axios(options);
}

export {
    deleteRequest,
    putRequest,
    postRequest,
    getRequest
}