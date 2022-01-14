const axios = require('axios')
export async function getData() {
    const response = await axios.get('api/data')
    return await response
}