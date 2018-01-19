import React from 'react';
import { withRouter } from 'react-router-dom';
import UserAPI from '../../api/userApi';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(name, event) {
    var change = {};
    change[name] =  event.target.value;
    this.setState(change);
  }

  handleSubmit (event) {
    event.preventDefault();
    UserAPI.signUpUser(this.state.username, this.state.password)
      .then(response => {
        console.log(response)
        if (response.status !== 201) {
          return console.log(response.data.error);
        } else {
          // redirect to login on successfull sign up
          return this.props.history.push('/login');
        }
      })
      .catch(error => {
        return console.log(error);
      })
  }

  render() {
    return (
      <div className="col-sm-3 col-md-offset-4 ">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username" className="control-label">User Name</label>
            <input type="username" name="username" className="form-control" placeholder="Enter username" onChange={this.handleChange.bind(this, "username")} required /> 
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange.bind(this, "password")} required />
          </div>
          <div className="form-group">
            <input type="submit" className="form-control" value="Sign Up"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
