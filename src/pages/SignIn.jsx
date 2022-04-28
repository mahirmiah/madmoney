import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import OAuth from '../components/OAuth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { ToastContainer } from 'react-toastify'
import mainlogo from '../assets/jpg/madmoneylogo.png'
import mainlogo2 from '../assets/jpg/madmoneylogo2.png'
import savings from '../assets/svg/savings.svg'
import {Form,Button,Col,Row, Container, Toast, Stack} from 'react-bootstrap'




function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
    <body>
      <div className='pageContainer'>
        {/* <div> */}
  
  
  {/* </div>    */}
          <div className='connectImg'  >
            {/* <img className='savingsImgOAuth' src={savings} height='80' width='100' /> */}

            <img src={mainlogo2} height='80' width='100' />

            <p className='signInText'>Sign In</p>
          </div >

        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          
          <div className='signInBar'>
            
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <OAuth />
        <Link to='/sign-up' className='registerLink '>
          Sign Up Instead
        </Link>
          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

        
      </div>
      </body>
    </>
  )
}

export default SignIn