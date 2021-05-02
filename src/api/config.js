import axios from 'axios';

export const getWithAxios = async url => {
  return await axios
    .get(process.env.REACT_APP_API_URL + url)
    .then(res => ({ ...res.data }))
    .catch(error => console.log(error));
};
