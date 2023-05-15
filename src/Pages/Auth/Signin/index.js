import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import { LoginIcon } from '@heroicons/react/outline'
import style from './Signin.module.css'

const Signin = () => {

  const { currentUser, login, setCurrentUser, setIsSubmitting, loggedIn } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSignIn = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch {
      alert("Error!")
    }
    setIsSubmitting(false)
  }

  const navigate = useNavigate()
  
  useEffect(() => {
    loggedIn && navigate('/')
  }, [loggedIn])

  return (
    <div className={style.main1}>
      <div className={style.main2}>
        <div className={style.card}>
        <div>
          <h1 className={style.h}>Login</h1>
        </div>
        <div>
        <form
          autoComplete="off"
          onSubmit={handleSignIn}
        >
          <div>
            <div>
              
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                ref={emailRef}
                placeholder="Email Address"
                required
              />
            </div>
            <div>
              
              <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div>
              <div>
              <div className={style.sp}>
                <span>
                 
                  Don't have an account? Sign up{" "}
                 
                 
                  <Link to="/signup">
                    {" "}
                    here.
                  </Link>
                  
                </span>
                </div>
              </div>
            </div>
            <div >
              <button type="submit" className={style.button}>
                <LoginIcon aria1-hidden="true" className={style.signin} />
                Login
              </button>
            </div>
          </div>
        </form>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Signin