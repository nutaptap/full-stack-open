import axios from "axios";

const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deleteId = id => {
  return axios.delete(baseUrl + id)
}

const put = (id, newObject)=> {
  return axios.put(baseUrl + id, newObject)
}

export default {getAll, create, deleteId, put}