import axios from "axios";

const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deleteId = id => {
  console.log(baseUrl + id)
  return axios.delete(baseUrl + id)
}
export default {getAll, create, deleteId}