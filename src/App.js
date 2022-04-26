import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute'
import Homepage from './pages/Homepage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Connect from './pages/Connect'


import ForgotPassword from './pages/ForgotPassword'
import './index.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<Homepage />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/connect' element={<Connect />} />
          

       
     
        </Routes>
        
      </Router>
<ToastContainer/>
    </>
  )
}

export default App