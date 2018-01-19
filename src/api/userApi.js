import axios from 'axios';

const signUpUrl = 'http://kitavi-bucketlist.herokuapp.com/auth/register';
const loginUrl = 'http://kitavi-bucketlist.herokuapp.com/auth/login';

class UserAPI {
  static signUpUser(username, password) {
    return axios.post(signUpUrl, {username, password})
    .then((response) => {
      return response
    })
    .catch(error => {
      return error
    })
  }

  static loginUser(username, password) {
    return axios.post(loginUrl, { username, password })
    .then(response => {
      return response
    })
    .catch(error => {
      return error
    });
  }

}

export default UserAPI;