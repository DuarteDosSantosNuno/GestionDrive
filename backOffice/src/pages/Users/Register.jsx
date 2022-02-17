import React, { Component } from 'react';
// import { Formik, Field, Form } from 'formik';
import * as URL from "../../APIConfig";

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
}

  submitHandler = async () => {
    const endpoint = URL.AUTHENTICATE + "register-client";
    // POST request using fetch with error handling
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          //body: JSON.stringify({ title: 'React POST Request Example' })
          body: JSON.stringify(this.state, null, 2)
    };


    console.log(endpoint);

    fetch(endpoint, requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        // this.setState({ postId: data.id })
        return response.json();
      })
      .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }

  render (){
    return (
      <div>
        <h1>Sign Up</h1>

            <form onSubmit={this.submitHandler} method="post">
              <label htmlFor="email">Email</label>
              <input name="email" placeholder="jane@acme.com" type="email" /> <br/>
              
              <label htmlFor="password">Password</label>
              <input name="password" type="password" /> <br/>
    
              <button type="submit" >
                Submit
              </button>
            </form>
      </div>
    );
  }

}
