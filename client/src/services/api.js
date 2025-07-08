import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export const authService = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    if (response.data?.token && response.data?.user) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return response.data;
    }
    throw new Error('Invalid login response from server.');
  },
  register: (userData) => api.post('/auth/register', userData),
  getCurrentUser: () => {
    try {
      const userJson = localStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.error("Error parsing user from localStorage", error);
      localStorage.removeItem('user');
      return null;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};

export const postService = {
  getAllPosts: async () => {
    const response = await api.get('/posts');
    return response.data || [];
  },
  getPostBySlug: async (slug) => {
    const response = await api.get(`/posts/${slug}`);
    return response.data || null;
  },
  createPost: (postData) => api.post('/posts', postData),
};

export const categoryService = {
  getAllCategories: async () => {
    const response = await api.get('/categories');
    return response.data || [];
  },
};
