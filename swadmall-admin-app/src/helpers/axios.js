import axios from 'axios';
import { api } from '../urlConfig';
const axiosInstace = axios.create({
    baseURL: api,
})



// import axios from 'axios';
// const axiosInstace = axios.create({
//     baseURL: api,
//     // headers: {
//     //     'Authorization' 
//     // }

// });

export default axiosInstace 