import React from 'react'
import { Link } from 'react-router-dom'

const Login = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className='container'>
      <p onClick={() => props.history.goBack()}>Go Back</p>
      {console.log('props', props)}
      <Link to='/'>
        <img
          alt='logo'
          id='logo'
          src='https://firebasestorage.googleapis.com/v0/b/senor-cocktails.appspot.com/o/Logo.jpg?alt=media&token=db113644-029b-4eb3-9467-32fd50ad84ac'
        />
      </Link>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <button className='btn__primary'>Login</button>
        <p>
          Already have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
