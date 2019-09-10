import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID 4191fdae87c8c1e1b194353794165b564566f7171d5bcd78c7b7c8db29c806b9'
    }
});