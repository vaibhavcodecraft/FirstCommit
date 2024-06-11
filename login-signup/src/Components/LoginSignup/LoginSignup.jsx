import React from 'react'
import './LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <div className="login-icon">
            {/* Replace with your actual icon */}
            <i className="fas fa-user"></i>
          </div>
          <h2>Login</h2>
          <p>You will be directed to the homepage</p>
        </div>
        <form>
          <div className="form-group">
            {/* <label htmlFor="email">vaibhav</label> */}
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div class="button-container">
                <button type="submit" class="login-button">Login</button>

                
            </div>
        </form>
      </div>
    </div>


  
  )
};
