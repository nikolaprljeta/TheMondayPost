import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiCaller = axios.create({baseURL: BASE_URL, timeout: 5000});

export const fetchPosts = async () => {
    try {
        const response = await apiCaller.get('/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchUser = async (userId) => {
    try {
        const response = await apiCaller.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching user with ID ${userId}:`, error);
        throw error;
    }
};
