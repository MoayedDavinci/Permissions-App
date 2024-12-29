import axios from 'axios';

export const API_IDENTIFIER = 'abdelmounim_sifelhak';

const api = axios.create({
    baseURL: `https://googlereviewsolicitor.azurewebsites.net/api/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default api;
