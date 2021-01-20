import axios from 'axios'
const baseUrl = '/api/upload/'

let token = null
const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const request = axios.get(`${baseUrl}/images`)
  return request.then(response => response.data)
}

const getOneImage = async (filename) => {
  const request = axios.get(`${baseUrl}/images/${filename}`)
  return request.then(response => response.data)
}

const create = async formData => {
  const config = {
    headers: { 
      ContentType: 'multipart/form-data',
      Authorization: token 
    },
  }
  const response = await axios.post(baseUrl, formData, config)
  return response.data
}

const remove = async filename => {
  const config = {
    headers: { 
      Authorization: token 
    },
  }
  try {
    const response = await axios.delete(`${baseUrl}/images/${filename}`, config)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export default { setToken, getAll, getOneImage, create, remove }