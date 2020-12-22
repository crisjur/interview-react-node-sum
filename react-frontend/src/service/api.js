import axios from 'axios';

//TODO api base url should be from config
export const sumNumbers = (body) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://localhost:5000/api/v1/sum`, body)
    .then(response => resolve(response))
    .catch(e => reject(e))
  })
}