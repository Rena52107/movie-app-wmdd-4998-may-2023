import axios from 'axios';
import qs from 'qs';
import { ACCESS_TOKEN_AUTH } from '../config/api_config';
import { BASE_URL } from '../config/api_config';

// GET Multiple records
export const getRecords = async (mediaType, listType) => {
  const options = {
    url: `${BASE_URL}/${mediaType}/${listType}`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
  };

  try {
    const response = await axios.get(options.url, options);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

// GET Single record
export const getRecord = async (mediaType, id) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/${mediaType}/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
  };

  try {
    const response = await axios.get(options.url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get Search results
export const getSearchResults = async (mediaType, query) => {
  const options = {
    method: 'GET',
    url: `${BASE_URL}/search/${mediaType}`,
    params: {
      query: query,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
    },
  };

  try {
    const response = await axios.get(options.url, options);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
