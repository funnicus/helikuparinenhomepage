import axios from 'axios'
const baseUrl = '/api/email/'

const getAll = async () => {
    const request = axios.get('/api/paintings/')
    return request.then(response => response.data)
}

const mail = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { getAll, mail }