import axios from 'axios';
const url = 'https://127.0.0.1/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);