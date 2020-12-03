import axios from 'axios'

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
})

export default instance
