import axios from 'axios';

const API_KEY = 'Y7ZKfwbZazpmbcpeIJpQ7ARdo22g65S7F_uW97LADpk';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchUnsplashApi = async (searchQuery, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });

  return response.data.results;
};
