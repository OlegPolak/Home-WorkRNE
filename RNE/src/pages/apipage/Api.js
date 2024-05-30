import axios from "axios";

// axios.defaults.baseUrl = "https://russianwarship.rip/api/v2";
const baseUrl =  "https://russianwarship.rip/api/v2"

export const axiosRequest = async({
        method = 'GET',
        url,
        params = {},
        responseType = 'json',
        data = undefined,
        headers = {
            'Content-Type': 'application/json',
        },
}) => {
    const response = await axios({
        method,
        url,
        baseURL: axios.defaults.baseURL,
        params,
        responseType,
        data,
        headers,
    });

    return response.data
}

export const warInfo = async () => {
    const configObj = {
        method: 'get',
        url: `${baseUrl}/war-info`,
    }

    response = await axios(configObj);
    return response.data
};


export const statistics = async () => {
    const configObj = {
        method: 'get',
        url: `${baseUrl}/statistics/latest`,
    }

    response = await axios(configObj);
    return response.data
};

export const dateInfo = async (day) => {
    const configObj = {
        method: 'get',
        url: `${baseUrl}/statistics/${day}`,
    }

    response = await axios(configObj);
    return response.data
};

export const terms = async () => {
    const configObj = {
        method: 'get',
        url: `${baseUrl}/terms/ua`,
    }

    response = await axios(configObj);
    return response.data
}