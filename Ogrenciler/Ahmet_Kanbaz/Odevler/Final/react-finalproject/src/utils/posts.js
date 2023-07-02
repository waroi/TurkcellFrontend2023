import axios from 'axios'

const apiUrl = 'http://localhost:3000';

export const postNewUser = async (newUser) => {
  try {
    const response = await axios.post(`${apiUrl}/users`, newUser)
    return response
  }
  catch (error) {
    return error.message
  }
}