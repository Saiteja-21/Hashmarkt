import { IdentificationIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import validations from './validations';
import style from './Signup.module.css'

const Signup = () => {
  const {
    currentUser,
    setCurrentUser,
    users,
    loggedIn,
    errors,
    setErrors,
    setIsSubmitting
  } = useAuth()

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  const handleSignUpFormChange = (e) => {
    setCurrentUser({ ...currentUser, [e.target.name]: e.target.value })
  }

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
    setErrors(validations(currentUser, users)) 
    setIsSubmitting(true)
    localStorage.setItem('user', JSON.stringify(currentUser))
    localStorage.setItem('users', JSON.stringify(users))
  }

  return (
    <div className={style.main1} >
      <div className={style.main2} >
        <div className={style.card}>
        <div>
          <h2 >Sign Up</h2>
        </div>
        <form
          autoComplete="off"
          onSubmit={handleSignUpSubmit}
        >
          <div >
            <div>
            {errors.firstName && <span>{errors.firstName}</span>}
              
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.firstName}
                name="firstName"
                placeholder="First Name"
              />
              
            </div>

            <div>
            {errors.lastName && <span>{errors.lastName}</span>}
              
              <input
                type="text"
                onChange={handleSignUpFormChange}
                value={currentUser.lastName}
                name="lastName"
                placeholder="Last Name"
              />
              
            </div>
            <div>
            {errors.email && <span >{errors.email}</span>}
             
              <input
                type="email"
                onChange={handleSignUpFormChange}
                value={currentUser.email}
                name="email"
                placeholder="Email Address"
              />
              
            </div>
            <div>
            {errors.password && <span >{errors.password}</span>}
              
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.password}
                name="password"
                placeholder="Password"
              />
              
            </div>
            <div>
            {errors.passwordConfirm && <span>{errors.passwordConfirm}</span>}
             
              <input
                type="Password"
                onChange={handleSignUpFormChange}
                value={currentUser.passwordConfirm}
                name="passwordConfirm"
                placeholder="Password Confirm"
              />
              
            </div>
            <div >
              <div className={style.sp}>
                <span >
                  Already have an account? Login{" "}
                  <Link to="/signin" >
                    {" "}
                    here.
                  </Link>
                </span>
              </div>
            </div>
            <div >
              <button type="submit" className={style.button} >
                <IdentificationIcon className={style.signup}
                  aria1-hidden="true"
                />
                Sign Up
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
