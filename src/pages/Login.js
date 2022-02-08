import "./Login.css";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-fluid main-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
            <div className="form-container">
              <div className="form-wrapper">
                <div className="logo-container">
                  <h1>NEXT</h1>
                </div>
                <div className="input-fields">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email / Emp ID"
                    autoComplete="new-password"
                    required
                  />
                  <input
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                  ̦
                </div>

                <div className="remember-toggle">
                  <label class="switch">
                    <input type="checkbox" name="" />
                    <span class="slider round"></span>
                  </label>
                  <h5>Remember Me</h5>
                </div>

                <div className="signIn-container">
                  <Link to="/forget">
                    <h6>Forget Password</h6>
                  </Link>
                  <button> SIGN IN</button>
                </div>

                <div className="powered-by-container">
                  <p>Powered By</p>
                  <h6>NEXT</h6>
                </div>
                <div className="copy-right">
                  <p>&copy; 2022 Next Digital Pvt Ltd. </p>
                </div>

                <div className="check-term-privacy-policy">
                  <p>Cookie Policy</p>
                  <p>Term Of Use</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
