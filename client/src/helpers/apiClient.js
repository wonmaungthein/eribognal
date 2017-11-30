import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:4000';

const apiClient = {
    getQuestions: () => {
        return axios.get(`${apiUrl}/api/questions`);
    },
    saveAnswer: (answer) => {
        return axios.post(`${apiUrl}/api/answers`, answer);
    },
    getPlaces: () => {
        return axios.get(`${apiUrl}/api/places`);
    },
    suggestPlaces: (place, file) => {
        const config = {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data',
            }
        }

        let data = new FormData();
        data.append('place', JSON.stringify(place))

        if (file) {
            data.append('image', file);
        }
        return axios.post(`${apiUrl}/api/places`, data, config)
    },
    viewPlaces: (placeId) => {
        return axios.get(`${apiUrl}/api/places/${placeId}`);
    }
}

export default apiClient;