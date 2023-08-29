// import { type } from "@testing-library/user-event/dist/type";
// import React from "react";
// import { useState } from "react";
// import "./LoginPage.css";


// const LoginPage = () => {
//     const [data,setData] = useState({email : "", password : ""});
    
//     const handleEvent =(event)=>{
//             event.preventDefault();
//             const email_inp = (event.target.email.value)
//             const pwd_inp = (event.target.password.value)
//             setData(data["email"] = {email_inp},data["password"] = {pwd_inp})
            
//     }
//     return (
//         <form onSubmit={handleEvent}>
//             <ul className="form-container">
//                 <li className="form-elements">
//                     <label className="form-label">Email :</label>
//                     <input type="email" name="email" className="form-input" />
//                 </li>
//                 <li className="form-elements">
//                     <label className="form-label">Password :</label>
//                     <input type="password" name="password" className="form-input" />
//                 </li>
//                 <li className="form-elements">
//                 <button type="submit">Submit</button>
//                 </li>
//             </ul>
//         </form>
//     );
// }

// export default LoginPage;

import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>LogIn</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}