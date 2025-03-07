import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { auth } from "../../Firebase/Firebase";
import logo from "../../Components/Navbar/Images/TZP-WHITE-LOGO.png";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg(''); // Reset error message before each login attempt
    setIsSubmitting(true);

    // Check if email or password fields are empty
    if (!email) {
      setErrorMsg('Email required');
      setIsSubmitting(false);
      return;
    }

    if (!password) {
      setErrorMsg('Password required');
      setIsSubmitting(false);
      return;
    }

    // Check if email format is valid
    if (!isValidEmail(email)) {
      setErrorMsg('Invalid email');
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if the email and password are exactly 'admin@gmail.com' and 'admin@123'
      if (email === 'admin@gmail.com' && password === 'admin@123') {
        // If credentials match, proceed with Firebase authentication
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/admin-blogupload'); // Redirect to admin dashboard
      } else {
        // If the credentials do not match, set an error message
        setErrorMsg('Incorrect login');
      }
    } catch (error) {
      console.error('Firebase login error:', error.code, error.message);
      setErrorMsg('Incorrect login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
      <div className="card" style={{ width: '36rem' }}>
        <div className="card-body">
          <div className="text-center">
            <img src={logo} alt="Logo" className="" style={{ width: '200px', height: '80px' }} />
            <h3>Login</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label><br />
              <input
                type="email"
                className="input-admin-login-email mt-1"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label><br />
              <input
                type={showPassword ? 'text' : 'password'} // This line ensures the password is hidden or shown
                className="input-admin-login-password mt-1"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye} // This icon toggles between the 'eye' and 'eye-slash' based on the state
                onClick={togglePasswordVisibility}
                className="position-absolute"
                style={{ right: '10px', top: '46px', cursor: 'pointer' }}
              />

            </div>
            {errorMsg && <div className="text-danger text-center">{errorMsg}</div>}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
