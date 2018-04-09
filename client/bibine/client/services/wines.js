import data from '../data/wines.json';
import axios from 'axios';

function getWines() {
  return axios.get('api/v1/wines')
  .then(res => {
    return res.data
  })
  .catch(err => console.log(err))
  // replace with a call to the server
  // return Promise.resolve(data);
}

export default {
  getWines
};
