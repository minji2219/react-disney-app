import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key:'c6ee0df5881dde0ece81dcf0f335f0e4',
    language:'ko-KR'
  }
})

export default instance;