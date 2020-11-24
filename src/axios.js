import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://spaces-dxb-strapi-atlas.herokuapp.com' //
})

export default instance
