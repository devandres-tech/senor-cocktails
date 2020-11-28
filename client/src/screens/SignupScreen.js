import React from 'react'
import { Link } from 'react-router-dom'

const SignupScreen = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='formContainer-bg'>
      <div className='formContainer container'>
        <Link to='/'>
          <img
            alt='logo'
            id='logo'
            src='https://firebasestorage.googleapis.com/v0/b/senor-cocktails.appspot.com/o/Logo.jpg?alt=media&token=db113644-029b-4eb3-9467-32fd50ad84ac'
          />
        </Link>
        <form onSubmit={submitHandler} className='formContainer__form'>
          <h1>Sign Up</h1>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='password' />
          <input type='password' placeholder='Confirm Password' />
          <button className='btn__primary'>Login</button>
          <p>
            Already have an account <Link to='/login'>Log in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignupScreen
