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
      console.log(`Form is valid: ${false}`)
      return false

    }
    console.log(console.log(`Form is valid: ${true}`))
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
      setUser()

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
      <h2>{formMessage()}</h2>
      <div className="user-form">
      
        <form onSubmit={submitUser}>
          <div className="form-group">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={handleUserChange} value={firstName} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleUserChange} value={lastName} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" className="form-control" id="email" name="email" onChange={handleUserChange} value={email} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" className="form-control" id="password" name="password" onChange={handleUserChange} value={password} />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange={handleUserChange} value={confirmPassword} />
          </div>

          {
            validateForm() ?
            <input type="submit" value="Submit" />
            : <input type="submit" value="Submit" disabled />
          }

        </form>
      </div>

    </div>
  );
}

export default Form;