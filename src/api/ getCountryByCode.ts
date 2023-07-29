import axios from 'axios';

export const getCountryByCode = async (url: string) => {  
  try {
    const response = await axios.get(url);
    return response.data[0];
  } catch (error) {
    throw error;
  }
};