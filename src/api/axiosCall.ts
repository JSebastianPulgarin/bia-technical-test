import axios from 'axios';

export const axiosCall = async (url: string) => {  
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};