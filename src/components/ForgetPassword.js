import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SlLock } from 'react-icons/sl';
import './ForgetPassword.css'; 

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [passVisible, setPassVisible] = useState(false);
  const [cpassVisible, setCPassVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [verified, setVerified] = useState('Verify');

  const handlePassVisible = () => {
    setPassVisible((prev) => !prev);
  };

  const handleCPassVisible = () => {
    setCPassVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleVerify = async (email) => {
    try {
      // Example API call
      // const response = await verifyEmailApi(email);
      // if (response.status === 201) {
      //   setVerified('Verified');
      // } else {
      //   setVerified('Not Verified');
      // }

      // For demonstration purposes:
      setVerified('Verified'); // or 'Not Verified' based on your API response
    } catch (error) {
      console.error('Verification failed', error);
      setVerified('Not Verified');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle the form submission, e.g., API call to reset password
    console.log('Form data:', formData);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Reset Password</h1>
        <div className="form-group">
          <div className="input-group">
            <AiOutlineMail className="icon" />
            <input
              type="email"
              placeholder="xyz@email.com"
              id="email"
              className="input"
              onChange={handleChange}
            />
            <h2
              className={`status ${
                verified === 'Verify'
                  ? 'status-verify'
                  : verified === 'Verified'
                  ? 'status-verified'
                  : 'status-not-verified'
              }`}
              onClick={() => handleVerify(formData.email)}
            >
              {verified}
            </h2>
          </div>
          <div className="input-group">
            <SlLock className="icon" />
            <input
              type={passVisible ? 'text' : 'password'}
              placeholder="Password"
              id="password"
              className="input"
              disabled={verified !== 'Verified'}
              onChange={handleChange}
            />
            {passVisible ? (
              <FaEye className="eye-icon" onClick={handlePassVisible} />
            ) : (
              <FaEyeSlash className="eye-icon" onClick={handlePassVisible} />
            )}
          </div>
          <div className="input-group">
            <SlLock className="icon" />
            <input
              type={cpassVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              id="confirmpassword"
              className="input"
              disabled={verified !== 'Verified'}
              onChange={handleChange}
            />
            {cpassVisible ? (
              <FaEye className="eye-icon" onClick={handleCPassVisible} />
            ) : (
              <FaEyeSlash className="eye-icon" onClick={handleCPassVisible} />
            )}
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Reset Password
            </button>
            <h4 className="credentials-link">Remember Credentials?</h4>
            <h4 className="signup-link">
              Don't have an account?{' '}
              <span className="signup-text">Sign Up</span>
            </h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
