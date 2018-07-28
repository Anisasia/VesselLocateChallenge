import axios from 'axios'

const aprs = axios.create({
  baseURL: 'https://api.aprs.fi/api/get',
  timeout: 10000,
  params: {} // Add params later in the config
})

export default aprs
