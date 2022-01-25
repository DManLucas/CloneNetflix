import axios from 'axios'

//to make requests to the movie webiste database
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
})

export default instance
