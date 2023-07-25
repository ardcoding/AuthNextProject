import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.get(`http://localhost:5000/users`, {
    params: { username, password },
  });

  return response.data[0] || null;
};
