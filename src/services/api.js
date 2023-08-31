import axios from 'axios';

const headers = () => {
    const headers = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    return headers
}

const errorMessage = {
    message: "Error en el servidor",
    name: "serverError",
    statusCode: 500
}

const POST = async (url, payload) => {
    let res = null;
    try {
        res = await axios.post(url, payload, headers());
        return (res && res.data) || null
    } catch (error) {
        throw (error && error.response.data.error) || errorMessage
    }
};

const GET = async (url, payload) => {
    let res = null;
    try {
        res = await axios.get(url, payload, headers());
        return (res && res.data) || null
    } catch (error) {
        throw (error && error.response.data.error) || errorMessage
    }
};
const PATCH = async (url, payload) => {
    try {
        const response = await axios.patch(url, payload, { headers: headers });
        return (res && res.data) || null;
    } catch (error) {
        throw (error.response.data.error) || errorMessage;
    }
};

const DELETE = async (url) => {
    try {
        const response = await axios.delete(url, { headers: headers });
        return response.data || null;
    } catch (error) {
        throw (error.response.data.error) || errorMessage;
    }
};

export default {
    POST,
    GET,
    PATCH,
    DELETE
}
