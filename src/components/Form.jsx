import { useState } from 'react';

const Form = (props) => {
  // Setting default values for user object keys
  const [user, setUser] =  useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  // destructuring the 'user' state object into individual variables
  const {firstName, lastName, email, password, confirmPassword} = user

  // Function to handle changing form inputs and update the user object accordingly
  const handleUserChange = (e) => {
    setUser(prevUserState => {return {...prevUserState, [e.target.name]: e.target.value}})
  }

  // JSX return
  return (
    <div>
      <h1>Hook Form</h1>
      <div className="user-form">
        `<form>
          <div class="form-group">
            <label for="firstName">First Name: </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleUserChange} />
          </div>

          <div class="form-group">
            <label for="lastName">Last Name: </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleUserChange} />
          </div>

          <div class="form-group">
            <label for="email">Email: </label>
            <input type="text" className="form-control" id="email" name="email" onChange={handleUserChange} />
          </div>

          <div class="form-group">
            <label for="password">Password: </label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleUserChange} />
          </div>

          <div class="form-group">
            <label for="confirmPassword">Confirm Password: </label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={handleUserChange} />
          </div>
        </form>`
      </div>

      {/* Show user data in real time according to the values in the form inputs */}
      <div className="showUserData">
        <h2>{firstName} {lastName}</h2>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
}

export default Form;