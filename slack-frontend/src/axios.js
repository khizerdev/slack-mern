import axios from 'axios'


const instance  = axios.create({
    baseURL: 'https://slack-mern-kz.herokuapp.com/'
})

export default instance