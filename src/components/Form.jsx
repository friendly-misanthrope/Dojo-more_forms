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

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
  const [userList, setUserList] = useState([])

  // destructuring the 'user' state object into individual variables
  const {firstName, lastName, email, password, confirmPassword} = user

  // Function to handle changing form inputs and update the user object accordingly
  // Validates form data before setting user object
  const handleUserChange = (e) => {
      setUser(prevUserState => {return {...prevUserState, [e.target.name]: e.target.value}})
  }

  // Function to validate form inputs
  const validateForm = () => {
    if (firstName.length < 2 || lastName.length < 2 || email.length < 5 || password.length < 8 || confirmPassword !== password) {
      return false

    }
    return true
  }

  // Function to display a message to the user based on whether the form has been submitted
  const formMessage = () => {
    if (!hasBeenSubmitted) {
      return "Please submit the form to continue"
    }
    return "Thank you for submitting the form"
  }

  // Function to submit user
  const submitUser = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Add user to user list if form data is all valid
      setUserList(prevUserList => {return [...prevUserList, user]})

      // Reset user object to default value
      setUser(prevUserState => {return {...prevUserState,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''}})

      // Set hasBeenSubmitted to true
      setHasBeenSubmitted(true)
    } else {
      console.log("One or more inputs are invalid. Please check validation messages on the form.")
    }
  }

  // JSX return
  return (
    <div>
      <h1>Hook Form</h1>
      {/* Display form message depending on whether form has been submitted */}
      <h2>{formMessage()}</h2>
      <div className="user-form">
        {/* Call submitUser() when form is submitted */}
        <form onSubmit={submitUser}>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleUserChange} value={firstName} />
          </div>

          {/* Conditionally render validation messages underneath input fields if data isn't valid */}
          {
            firstName.length < 2 && firstName.length > 0 ?
              <p className="errorMsg">First Name must be at least 2 characters</p>
              : null
          }

          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleUserChange} value={lastName} />
          </div>
          {
            lastName.length < 2 && lastName.length > 0 ?
              <p className="errorMsg">Last Name must be at least 2 characters</p>
              : null
          }

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" className="form-control" id="email" name="email" onChange={handleUserChange} value={email} />
          </div>
          {
            email.length < 5 && email.length > 0 ?
              <p className="errorMsg">Email must be at least 5 characters</p>
              : null
          }

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleUserChange} value={password} />
          </div>
          {
            password.length < 8 && password.length > 0 ?
              <p className="errorMsg">Password must be at least 8 characters</p>
              : null
          }

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={handleUserChange} value={confirmPassword} />
          </div>
          {
            confirmPassword.length > 0 && confirmPassword !== password ?
              <p className="errorMsg">Passwords must match</p>
              : null
          }

          {
            <input className="btn btn-primary" type="submit" value="submit" disabled={validateForm() ? false :true} />
          }

        </form>
      </div>

      {/* If there are users in userList, map through the array and display each one */}
      {
        userList.length > 0 ?
          <div className="allUsers">
            <h2>All Users</h2>
            {
              userList.map((user, index) => (
                <div key={index} className="userCard">
                  <h4>{user.firstName} {user.lastName}</h4>
                  <p>Email: {user.email}</p>
                  <p>Password: {user.password}</p>
                  <p>Password Confirmation: {user.confirmPassword}</p>
                </div>
              ))
            }
          </div>
          : null
      }

    </div>
  );
}

export default Form;