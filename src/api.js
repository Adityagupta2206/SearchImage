import axios from 'axios';

const API_KEY = 'fHNzYBFQqiW9P9RYqIHPc0NYkh38bjqNKvawvos1z2g';  
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const searchImages = async (query, page = 1) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      query,
      page,
      per_page: 10,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
